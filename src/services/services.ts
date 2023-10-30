import prisma from "@/lib/prisma";
import { Prisma,  employee } from "@prisma/client";

export async function findAllEmployee(): Promise<employee[]> {
    return await prisma.employee.findMany({
        orderBy: {id: "asc"}
    })
}

export async function findAll() {
    return await prisma.$queryRaw`SELECT employee.id AS id, employee.FullName AS FullName,
    employee.Phone AS Phone, employee.Gender AS Gender,
    employee.Occupation AS Occupation, employee.Address AS Address,
    employee.CheckInDate AS CheckInDate, employee.CheckOutDate AS CheckOutDate,
    employee.Email AS Email
    FROM employee
    ORDER BY employee.id ASC`;
}


export async function removeEmployee(id: number) {
    return await prisma.employee.delete({
        where : {id: id}
    })
}
// เพิ่มข้อมูลใหม่ในตาราง employee
export async function createEmployee(data: Prisma.employeeCreateInput) {
    return await prisma.employee.create({
        data: {
            FullName: data.FullName,
            Phone: data.Phone,
            Gender: data.Gender,
            Occupation: data.Occupation,
            Address: data.Address,
            CheckInDate: data.CheckInDate,
            CheckOutDate: data.CheckOutDate,
            Email: data.Email
        }
    });
}



// อ่านข้อมูล 1 แถว by id ใน table employee
export async function findOneEmployee(id: number): Promise<employee | null> {
    return await prisma.employee.findUnique({
        where: {id: id},
    })
}
// แก้ไขข้อมูลในตาราง employee
export async function  updateEmployee(id: number, data: Prisma.employeeUpdateInput) {
    return await prisma.employee.update({
        where: {id: id},
        data: data
    })
}
