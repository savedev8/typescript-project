import webpack from 'webpack';

import path from 'path';
import portfinder from 'portfinder';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const basePort = 3000;
    async function findFreePort(basePort: number) {
        try {
            const openPort = await portfinder.getPortPromise({
                port: basePort,
                stopPort: basePort + 1000,
            });

            console.log(`Свободный порт: ${openPort}`);
            return openPort;
        } catch (err) {
            console.error('Не удалось найти свободный порт:', err);
            return basePort; // Используем базовый порт, если не удалось найти свободный
        }
    }

    const mode = env.mode || 'development';
    const PORT = env.port || findFreePort(basePort);

    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });
    return config;
};
