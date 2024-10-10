import Image from "next/image";

// Função assíncrona para buscar dados do backend
async function getHomeSiteData() {
  const res = await fetch('http://localhost:8000/api/homesite/');
  
  if (!res.ok) {
    throw new Error('Falha ao buscar dados da API');
  }
  
  return res.json();
}

export default async function Home() {
  // Buscar os dados da API
  const homeSiteData = await getHomeSiteData();

  return (
    <div className="min-h-screen bg-yellow-500 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <header className="w-full py-8 bg-gray-900 text-white shadow-md">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center bg-gradient-to-r from-gray-300 via-orange-400 to-red-600 bg-clip-text text-transparent tracking-wide">
          {homeSiteData[0]?.title || "Bem-vindo ao Estação das Leis"}
        </h1>
      </header>
      <main className="flex flex-col items-center justify-center gap-10 py-16 px-4 sm:px-10 md:flex-row-reverse">
        {/* Imagem Principal */}
        <div className="flex-shrink-0">
          <Image
            className="rounded-lg shadow-lg"
            src={homeSiteData[0]?.image || "https://nextjs.org/icons/next.svg"}
            alt={homeSiteData[0]?.title || "Imagem não disponível"}
            width={400}
            height={300}
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Conteúdo da Página */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-4">
            {homeSiteData[0]?.title || "Título não disponível"}
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            {homeSiteData[0]?.site_description || "Descrição não disponível"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Fundador: {homeSiteData[0]?.founder || "Informação indisponível"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Meta Descrição: {homeSiteData[0]?.meta_description || "Descrição não disponível"}
          </p>

          {/* Botões de ação */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Saiba Mais
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </main>

      <footer className="w-full py-6 bg-gray-800 text-white text-center">
        <p className="text-sm">© {new Date().getFullYear()} Estação das Leis. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="hover:underline">Política de Privacidade</a>
          <a href="#" className="hover:underline">Termos de Uso</a>
        </div>
      </footer>
    </div>
  );
}
