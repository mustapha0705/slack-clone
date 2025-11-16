import { StreamChat } from "stream-chat";
import { ENV } from "./env.js";

const streamClient = StreamChat.getInstance(
  ENV.STREAM_API_KEY,
  ENV.STREAM_API_SECRETE
);

export const upsertSreamUser = async (userData) => {
  try {
    await streamClient.upsertUser(userData);
    console.log("Stream user upserted successfully", userData.name);
    return userData;
  } catch (error) {
    console.error("Error upserting stream user", error);
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    await streamClient.deleteUser(userId);
    console.log(`User ${userId} deletd successfully`);
  } catch (error) {
    console.error("Error deleting user", error);
  }
};

export const generateStreamToken = async (userId) => {
  try {
    const userIdString = userId.toStrig();
    return streamClient.createToken(userIdString);
  } catch (error) {
    console.error("Error generating token:", error);
    return null;
  }
};
