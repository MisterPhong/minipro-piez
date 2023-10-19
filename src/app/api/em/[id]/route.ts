import { findOneEmployee, removeEmployee, updateEmployee } from "@/services/services";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(req: NextRequest, params : { params: {id: number} }) {
    await removeEmployee(+params.params.id)
    return NextResponse.json( {
        message: "ลบข้อมูลสำเร็จ"
    })
}
// GET by ID
export async function GET(req: NextRequest, params: {params: {id : any}}) {
    const data = await findOneEmployee(+params.params.id)
    return NextResponse.json({data: data})
}

//Update
export async function PUT(req: NextRequest, params : { params: {id: number} }) {
        const bodyJson: any = await req.json() as Prisma.employeeUpdateInput;
        const data = await updateEmployee(+params.params.id, bodyJson);
        return NextResponse.json(data);
}