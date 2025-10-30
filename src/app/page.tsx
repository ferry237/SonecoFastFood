import FooterComponent from "@/components/Footer";
import HeaderComponent from "@/components/Header";
import MainComponent from "@/components/Main";

export default function Page() {
  return (
    <div className="w-full  bg-[var(--color-primary)] flex flex-col">
    <HeaderComponent />
    <MainComponent/>
    <FooterComponent/>
    </div>
  );
}
