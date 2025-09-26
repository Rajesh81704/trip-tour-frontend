"use client";
import { Button } from "@/components/ui/button";
// import { packageData } from "@/data";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PackageCard } from "../cards/package";
import api from "@/lib/api";
import { PackageData } from "../packages";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
/* eslint-disable */

const states = [
    {
        name: "West Bengal",
        icon: "🌾",
        description: "Land of Culture",
        active: false,
        image: "https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        name: "Andhra Pradesh",
        icon: "🏞️",
        description: "Gateway to South",
        active: false,
        image: "https://plus.unsplash.com/premium_photo-1694475122158-5c088fe408ea?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Arunachal Pradesh",
        icon: "🏔️",
        description: "Land of Dawn",
        active: false,
        image: "https://images.unsplash.com/photo-1544735716-ea9ef790f501?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        name: "Assam",
        icon: "🍵",
        description: "Tea Gardens",
        active: false,
        image: "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        name: "Bihar",
        icon: "🕌",
        description: "Ancient Learning",
        active: false,
        image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        name: "Chhattisgarh",
        icon: "🌳",
        description: "Tribal Heritage",
        active: false,
        image: "https://images.unsplash.com/photo-1673462107499-97848ff888b9?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Goa",
        icon: "🏖️",
        description: "Beach Paradise",
        active: false,
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        name: "Gujarat",
        icon: "🦁",
        description: "Land of Lions",
        active: false,
        image: "https://images.unsplash.com/photo-1642841819300-20ed449c02a1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Haryana",
        icon: "🏏",
        description: "Sports Hub",
        active: false,
        image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        name: "Himachal Pradesh",
        icon: "❄️",
        description: "Mountain State",
        active: false,
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        name: "Jharkhand",
        icon: "⛏️",
        description: "Mineral Rich",
        active: false,
        image: "https://images.unsplash.com/photo-1619500765355-8ba767d6e261?q=80&w=1297&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Karnataka",
        icon: "🏰",
        description: "Tech Capital",
        active: false,
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        name: "Kerala",
        icon: "🚣",
        description: "God's Own Country",
        active: false,
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        name: "Madhya Pradesh",
        icon: "🐯",
        description: "Heart of India",
        active: false,
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        name: "Maharashtra",
        icon: "🏙️",
        description: "Gateway of India",
        active: false,
        image: "https://images.unsplash.com/photo-1595855759920-86582396756a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        name: "Manipur",
        icon: "💃",
        description: "Jewel of India",
        active: false,
        image: "https://plus.unsplash.com/premium_photo-1694475528747-0fa268e4c91f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Meghalaya",
        icon: "☁️",
        description: "Abode of Clouds",
        active: false,
        image: "https://images.unsplash.com/photo-1544735716-ea9ef790f501?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        name: "Mizoram",
        icon: "🎵",
        description: "Song of Hills",
        active: false,
        image: "https://images.unsplash.com/photo-1640529209198-0c56ce522607?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Nagaland",
        icon: "🦚",
        description: "Land of Festivals",
        active: false,
        image: "https://images.unsplash.com/photo-1544735716-ea9ef790f501?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        name: "Odisha",
        icon: "🛕",
        description: "Soul of India",
        active: false,
        image: "https://images.unsplash.com/photo-1718696070531-7c34bee582db?q=80&w=978&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Punjab",
        icon: "🌾",
        description: "Land of Five Rivers",
        active: false,
        image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        name: "Rajasthan",
        icon: "🏜️",
        description: "Desert State",
        active: false,
        image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        name: "Sikkim",
        icon: "🗻",
        description: "Mountain Paradise",
        active: false,
        image: "https://images.unsplash.com/photo-1544735716-ea9ef790f501?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        name: "Tamil Nadu",
        icon: "🥥",
        description: "Temple State",
        active: false,
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        name: "Telangana",
        icon: "🎭",
        description: "Cultural Hub",
        active: false,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        name: "Tripura",
        icon: "🎋",
        description: "Hill State",
        active: false,
        image: "https://images.unsplash.com/photo-1701407369440-b8c0232707fb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Uttar Pradesh",
        icon: "🕍",
        description: "Historical State",
        active: false,
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
        name: "Uttarakhand",
        icon: "⛰️",
        description: "Dev Bhoomi",
        active: false,
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    },
];

export const FeaturedPackages = () => {
    const [activeCategory, setActiveCategory] = useState("trending");
    const [packageData, setPackageData] = useState<PackageData[]>([]);

    // Fetch package data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Fetching packages from API...");
                const response = await api.get<{
                    success: boolean;
                    packages: PackageData[];
                }>("/packages");
                console.log("API Response:", response);

                if (response.data.success && response.data.packages) {
                    const data = response.data.packages;
                    console.log("Processed packages:", data);
                    setPackageData(data);
                } else {
                    console.log("No packages found or API error");
                    setPackageData([]);
                }
            } catch (error) {
                console.error("Error fetching package data:", error);
                setPackageData([]); // Set empty array on error
            }
        };

        fetchData();
    }, []);

    const router = useRouter();

    const handlePackageClick = (id: string) => {
        router.push(`/packages/${id}`);
    };

    const handleStateClick = (stateName: string) => {
        router.push(`/packages?state=${stateName.toLowerCase().replace(/\s+/g, "-")}`);
    };

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Categories */}
                <div className="mb-8 overflow-x-auto scrollbar-hide">
                    <div className="flex items-center gap-4 py-2 px-1 min-w-max">
                        {states.map((state, index) => (
                            <Link href={`/packages?state=${state.name.toLowerCase().replace(/\s+/g, "-")}`}>
                                <Card
                                    key={state.name}
                                    className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-0 bg-white/80 backdrop-blur-sm relative p-0"
                                >
                                    <div className="relative h-48 sm:h-56 md:h-48 lg:h-52 overflow-hidden">
                                        <Image
                                            width={400}
                                            height={300}
                                            src={state.image}
                                            alt={state.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            priority={index < 4}
                                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                                        />

                                        {/* Enhanced Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500" />

                                        {/* Subtle Border Glow */}
                                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/30 rounded-lg transition-all duration-500" />

                                        <CardContent className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                                            <h3 className="font-bold text-base sm:text-lg mb-1 group-hover:text-blue-200 transition-colors duration-300 relative z-10">
                                                {state.name} {state.icon}
                                            </h3>
                                            <p className="text-xs sm:text-sm opacity-90 mb-2 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                                                {state.description}
                                            </p>
                                        </CardContent>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white rounded-lg p-1 shadow-md flex">
                        <Button
                            variant="ghost"
                            className="px-8 py-2 rounded-lg font-medium transition-all duration-300  bg-orange-500 text-white shadow-md  hover:bg-orange-600 hover:shadow-lg"
                        >
                            Trending Tours
                        </Button>
                    </div>
                </div>

                {/* Package Cards */}
                <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:overflow-visible md:pb-0 scrollbar-hide">
                    {packageData.map((pkg) => (
                        <div key={pkg._id} className="flex-shrink-0 w-[280px] md:w-auto">
                            <PackageCard pkg={pkg} handlePackageClick={() => handlePackageClick(pkg._id)} />
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-14">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-lg tracking-wide"
                    >
                        Explore All Destinations
                    </Button>
                </div>
            </div>
        </section>
    );
};
