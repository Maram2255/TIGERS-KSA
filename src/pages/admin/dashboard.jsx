import { useSession } from "next-auth/react";
import useSWR from "swr";
import axios from "axios";

export default function Dashboard() {
  const { data: session } = useSession();
  const { data: products } = useSWR("/api/products", url =>
    axios.get(url).then(r => r.data)
  );

  if (!session || session.user.role !== "admin") {
    return <div className="p-10 text-center">غير مصرح بالدخول</div>;
  }

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6">لوحة التحكم</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>المنتج</th>
            <th>السعر</th>
            <th>المخزون</th>
          </tr>
        </thead>
        <tbody>
          {products?.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price} ريال</td>
              <td>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
