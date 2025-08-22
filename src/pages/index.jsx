import Layout from "../components/Layout";
import RobotMascot from "../components/RobotMascot";

export default function Home() {
  return (
    <Layout>
      <section className="text-center py-20 bg-white">
        <h1 className="text-5xl font-bold text-turquoise mb-4">
          النمور السعودية
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          المنصة المستقبلية لإدارة المتاجر والمصانع
        </p>
        <RobotMascot />
      </section>
    </Layout>
  );
}
