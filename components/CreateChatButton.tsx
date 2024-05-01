"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { MessageSquarePlusIcon } from "lucide-react";


const CreateChatButton = () => {
    const router = useRouter();
    const createNewChat = async() => {
        // all the code logic
    }
  return <Button variant={"ghost"}>
    <MessageSquarePlusIcon />
  </Button>;
};

export default CreateChatButton;
