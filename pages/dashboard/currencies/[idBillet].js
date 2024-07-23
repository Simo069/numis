import React from "react";
import { useRouter } from "next/router";
import DashboardLayout from "@/components/DashboardLayout";

export default function updateBillet(){
    const router = useRouter()
    const { idBillet , isVariation } = router.query

    return (
        <>
            <DashboardLayout>
                
            </DashboardLayout>
        </>
    );
}