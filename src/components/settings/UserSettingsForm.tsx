"use client";
import { useState, useEffect, useCallback } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { useToast } from "../ui/use-toast";
import { Loader2 } from "lucide-react";
import api from "../../lib/axiosInstance";

interface UserData {
  name: string;
  email: string;
  bio: string;
  location: string;
  picture: string;
}

export default function UserSettingsForm() {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    bio: "",
    location: "",
    picture: "",
  });
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { toast } = useToast();

  const fetchUserData = useCallback(() => {
    try {
      // Get user data from localStorage
      const storedUserData = localStorage.getItem("user");

      if (storedUserData) {
        const data = JSON.parse(storedUserData);
        console.log("User data from localStorage:", data);
        setUserData(data);
      } else {
        console.log("No user data found in localStorage");
      }
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      toast({
        title: "Error",
        description: "Failed to load user data",
        variant: "destructive",
      });
    }
  }, [toast]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    // Replace with your image upload API endpoint
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data.url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let pictureUrl = userData.picture;
      if (imageFile) {
        pictureUrl = await uploadImage(imageFile);
      }

      const response = await fetch("/api/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...userData,
          picture: pictureUrl,
        }),
      });

      const data = await response.json();
      if (data.success) {
        toast({
          title: "Success",
          description: "Profile updated successfully",
        });
        setUserData(data.data);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center space-x-4">
        <Avatar className="w-20 h-20">
          <AvatarImage src={userData.picture || "/placeholder-user.jpg"} />
          <AvatarFallback>{userData.name?.[0]}</AvatarFallback>
        </Avatar>
        <div>
          <Label htmlFor="picture">Profile Picture</Label>
          <Input
            id="picture"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" value={userData.email} disabled />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          value={userData.bio}
          onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
          placeholder="Tell us about yourself"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          value={userData.location}
          onChange={(e) =>
            setUserData({ ...userData, location: e.target.value })
          }
          placeholder="City, Country"
        />
      </div>

      <Button type="submit" disabled={loading}>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Save Changes
      </Button>
    </form>
  );
}
