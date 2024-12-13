"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import imgUrl from "../../../public/assets/logo.png";
import { useState } from "react";

export const Login = () => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className="flex items-center justify-center h-screen w-full bg-loginBg">
      <Card className="w-full max-w-md shadow-lg rounded-3xl border border-mainBorder">
        <CardHeader className="flex flex-col gap-1">
          <Image
            src={imgUrl}
            alt="logo"
            width={80}
            height={80}
            className="mx-auto"
          />
          <CardTitle className="text-center text-2xl">
            Log in to Undetectable AI
          </CardTitle>
          <p className="text-sm text-center text-textSecondaryColor">
            Enter your username and password to continue
          </p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input
              value={name}
              onChange={handleNameChange}
              type="name"
              id="name"
              placeholder="Username"
            />

            <Input
              value={password}
              onChange={handlePasswordChange}
              type="password"
              id="password"
              placeholder="Password"
            />

            <Button type="submit" className="w-full rounded-xl">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
