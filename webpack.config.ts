import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

const paths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}
const mode = 'development'
const isDev = mode === 'development'

const config = buildWebpackConfig({
    mode: 'development',
    paths: paths,
    isDev: isDev
})

export default config;