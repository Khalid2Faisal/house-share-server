import dotenv from "dotenv";
dotenv.config();

import { ObjectID } from "mongodb";
import { Listing } from "../lib/types";
import { connectDatabase } from "../database";

const seed = async () => {
  try {
    console.log("[seed]: running...");

    const db = await connectDatabase();
    const listings: Listing[] = [
      {
        _id: new ObjectID(),
        title: "Travelodge by Wyndham Las Vegas Airport Near The Strip",
        image:
          "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        address:
          "5075 Koval Ln, Las Vegas, 89119, NV, United States of America",
        price: 10000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5,
      },
      {
        _id: new ObjectID(),
        title: "Jet Luxury at the Vdara Condo Hotel",
        image:
          "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        address:
          "2600A West Harmon Ave, Las Vegas, 89109, NV, United States of America",
        price: 10000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5,
      },
      {
        _id: new ObjectID(),
        title: "South Point Hotel, Casino, and Spa",
        image:
          "https://images.unsplash.com/photo-1495754149474-e54c07932677?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        address:
          "9777 Las Vegas Blvd S, Las Vegas, 89183, NV, United States of America",
        price: 10000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5,
      },
      {
        _id: new ObjectID(),
        title: "Best Western Plus Las Vegas South Henderson",
        image:
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        address:
          "3041 Saint Rose Parkway, Henderson, 89052, NV, United States of America",
        price: 10000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5,
      },
      {
        _id: new ObjectID(),
        title: "The Henley Park Hotel",
        image:
          "https://images.unsplash.com/photo-1558392164-be227dfe1c98?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        address:
          "926 Massachusetts Ave NW, Washington, 20001, DC, United States of America",
        price: 10000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5,
      },
      {
        _id: new ObjectID(),
        title: "NW DC 30 Day Luxury Apartments One Bedroom",
        image:
          "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        address: "Washington, DC, United States of America",
        price: 10000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5,
      },
      {
        _id: new ObjectID(),
        title: "Sofitel Washington DC Lafayette Square",
        image:
          "https://images.unsplash.com/photo-1466499855940-3d95a5277898?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        address:
          "806 15th Street NW, Washington, 20005, DC, United States of Americ",
        price: 10000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5,
      },
      {
        _id: new ObjectID(),
        title: "ARC THE.HOTEL, Washington DC",
        image:
          "https://images.unsplash.com/photo-1594995810334-df6d1a6209a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        address:
          "824 New Hampshire Ave Nw, Washington, 20037, DC, United States of America",
        price: 10000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5,
      },
    ];
    for (const listing of listings) {
      await db.listings.insertOne(listing);
    }
    console.log("[seed]: success");
  } catch {
    throw new Error("Failed to seed data.");
  }
};

seed();
