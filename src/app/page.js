import Counter from "@/components/Counter";
import Header from "@/components/Header";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
    <Header></Header>
    <Counter></Counter>
    </div>
  );
}
