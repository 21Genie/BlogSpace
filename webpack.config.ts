import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv } from './config/build/types/config';

export default (env: BuildEnv) => {
    
    const paths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const mode = env.mode || 'development'
    const PORT = env.port || 3001

    const isDev = mode === 'development'
    
    const config = buildWebpackConfig({
        mode: mode,
        paths: paths,
        isDev: isDev,
        port: PORT
    })
    
    return config
};