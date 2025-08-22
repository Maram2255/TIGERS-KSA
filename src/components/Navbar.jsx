import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-turquoise text-white flex justify-between p-4">
      <div className="text-xl font-semibold">النمور السعودية</div>
      <div className="space-x-6">
        <Link href="/">الرئيسية</Link>
        <Link href="/shop">المتجر</Link>
        <Link href="/admin/dashboard">لوحة التحكم</Link>
      </div>
    </nav>
  );
}
