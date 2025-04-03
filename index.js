import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white text-[#30536A] min-h-screen">
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-[#30536A] text-white">
        <div className="mb-6">
          <img src="/logo.svg" alt="Logo Arcos do Canal" width={180} height={180} />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Arcos do Canal</h1>
        <p className="text-lg md:text-2xl mb-6 max-w-xl">
          Sabores autênticos em um ambiente sofisticado à beira do canal.
        </p>
        <div className="flex gap-4">
          <a href="https://livemenu.app/menu/64020c4f6b2a3400527d194d" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">Ver Cardápio</Button>
          </a>
          <a href="https://wa.me/5522988064201" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">Fazer Pedido</Button>
          </a>
        </div>
      </section>

      <section className="py-16 px-4 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Sobre o Arcos do Canal</h2>
        <p className="text-lg">
          Entre sabores autênticos e um ambiente sofisticado, o Arcos do Canal é um refúgio gastronômico à beira do canal. 
          Combinamos ingredientes frescos, boa música e uma atmosfera acolhedora para transformar cada refeição em uma experiência inesquecível.
          Seja para um almoço especial, um jantar a dois ou uma noite entre amigos, nossa casa está sempre de portas abertas para receber você.
        </p>
      </section>

      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8">Galeria</h2>
        <p className="text-lg text-gray-500">Em breve, fotos do nosso espaço e pratos deliciosos.</p>
      </section>

      <section className="py-16 px-4 bg-[#F8F8F8] text-center">
        <h2 className="text-3xl font-semibold mb-4">Contato e Localização</h2>
        <div className="mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.122261927007!2d-42.01064442379157!3d-22.877476529289733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9704a51ee813db%3A0x2e7befaa021cea78!2sArcos%20do%20Canal!5e0!3m2!1spt-BR!2sbr!4v1712123042739!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            loading="lazy"
            className="rounded-xl border"
            allowFullScreen
          ></iframe>
        </div>
        <p className="mb-2">Funcionamento: Todos os dias, das 12:00 às 00:00</p>
        <p className="mb-2">
          <a href="https://wa.me/5522988064201" className="underline">Fale conosco pelo WhatsApp</a>
        </p>
        <p>
          <a href="https://www.instagram.com/arcosdocanal/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 underline">
            <Instagram className="w-4 h-4" /> Instagram
          </a>
        </p>
      </section>
    </main>
  );
}
