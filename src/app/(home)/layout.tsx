import AppLayout from "../components/AppLayout";
import Providers from "../components/Provider";

export const metadata = {
  title: "ระบบจัดการข้อมูลพนักงาน",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
