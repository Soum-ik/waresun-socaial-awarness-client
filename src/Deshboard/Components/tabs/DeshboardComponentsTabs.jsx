import React from "react";
import DeshboardLayout from "../../layouts/masterLayout";
import { Factory } from 'lucide-react';
import { StickyNote } from 'lucide-react';
import { HiMiniUsers } from "react-icons/hi2";
import { useBusiness } from "../../../hooks/useFetchData";


function DeshboardComponentsTabs() {

    const businessPosts = useBusiness('http://localhost:4000/business-deshboard');
    const capaignPosts = useBusiness('http://localhost:4000/campains-deshboard');
    const allUser = useBusiness('http://localhost:4000/all-user');


    return (
        <DeshboardLayout>
            <section className="h-[100vh]">
                <div className="flex justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-semibold">Dashboard</h1>

                    </div>

                </div>
                <div className=" grid grid-cols-1 lg:grid-cols-3 gap-3 sm:grid-cols-2">
                    <div className="flex items-center justify-between p-8 bg-white w-[300px] rounded-2xl border border-input">
                        <div>
                            <h2 className="text-4xl font-bold mb-2 text-center">{allUser.length}</h2>
                            <p className="text-base font-medium">Total User</p>
                        </div>
                        <div>
                            <HiMiniUsers className="" size={50} />
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-8 bg-white w-[300px] rounded-2xl border border-input">
                        <div>
                            <h2 className="text-4xl font-bold mb-2 text-center">{capaignPosts.length}</h2>
                            <p className="text-base font-medium">Total Campaign Post</p>
                        </div>
                        <div>
                            <Factory className="" size={50} />
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-8 bg-white w-[300px] rounded-2xl border border-input">
                        <div>
                            <h2 className="text-4xl font-bold mb-2 text-center">{businessPosts.length}</h2>
                            <p className="text-base font-medium">Total Business Post</p>
                        </div>
                        <div>
                            <StickyNote className="" size={50} />
                        </div>
                    </div>
                </div>
            </section>

        </DeshboardLayout>

    );
}

export default DeshboardComponentsTabs;
