import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
        // Adicione o caminho para os arquivos Blade do TailAdmin aqui,
        './resources/views/admin/**/*.blade.php',
        // Se o TailAdmin tiver componentes ou arquivos JS que geram classes, adicione aqui
        // Ex: './public/tailadmin-assets/**/*.js',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans], // Exemplo da fonte padrão do Laravel
                 'poppins': ['Poppins', 'sans-serif'],
            },
            colors: {
                // Paleta de cores do seu site 'Lado B Notícias'
                'primary-dark-blue': '#161C30', // Azul escuro do background/logo
                'accent-green': '#4CAF50',     // Verde vibrante para botões/destaques
                'text-dark': '#333333',        // Cor para títulos e corpo de texto principal
                'text-light': '#6B7280',       // Cor para textos secundários/labels
                'card-bg': '#FFFFFF',          // Fundo dos cards de notícia
                'page-bg-light': '#F3F4F6',    // Fundo geral da página (quase branco)
                // Se tiver outras variações, adicione:
                'hover-green': '#43A047',
            },
        },
    },

    plugins: [forms],
};
