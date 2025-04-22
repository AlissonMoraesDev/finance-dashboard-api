import { execSync } from 'child_process'

async function init() {
    // Apenas aplica o schema no banco já rodando (via GitHub Actions services)
    execSync('npx prisma db push', { stdio: 'inherit' })
}

export default init
