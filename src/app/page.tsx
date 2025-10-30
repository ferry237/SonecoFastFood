import FooterComponent from "@/components/Footer";
import HeaderComponent from "@/components/Header";
import MainComponent from "@/components/Main";

export default function Page() {
  return (
    <body className="bg-[var(--color-primary)] flex flex-col">
    <HeaderComponent />
    <MainComponent/>
    <FooterComponent/>
    </body>
  );
}
