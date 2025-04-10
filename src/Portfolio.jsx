import { motion } from "framer-motion";
import projects from "/src/data/projects.json";
import {FaLinkedin, FaGithub, FaFileDownload} from "react-icons/fa";

export default function Portfolio() {
  return (
    <main className="min-h-screen text-white p-6 bg-gradient-to-b from-blue-950 via-gray-950 to-black">
      <header className="text-center py-12">
      <motion.img
        src="/myself.jpg"
        alt="myself in a circular format"
        className="mx-auto rounded-full w-64 h-64 object-cover mb-4 border-4 border-gray-700"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Opa, Irving aqui 🤙
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Desenvolvedor Frontend | React | Javascript | CSS
        </motion.p>

        <motion.div
          className="mt-6 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >

        <a 
          href="https://www.linkedin.com/in/irving-cesar/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition"
        >
          <FaLinkedin /> Linkedin
        </a>

        <a 
          href="https://github.com/irving-Cesar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-xl transition"
        >
          <FaGithub /> GitHub
        </a>

        <a 
          href="/Curriculo.pdf"
          download
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl transition"
        >
          <FaFileDownload /> Baixar CV
        </a>

        </motion.div>
      </header>

      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
          Meus projetos
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <motion.div
              key={project}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-medium mb-2">{project.nome}</h3>
              <p className="text-gray-400 mb-4">{project.descricao}.</p>
              <a
                href={project.url}
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-xl"
              >
                Ver Projeto
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="text-center py-10 text-gray-500">
        © {new Date().getFullYear()}. Todos os direitos reservados.
      </footer>
    </main>
  );
}
