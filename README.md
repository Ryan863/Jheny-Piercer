# Jheny Piercer — Landing Page Editorial de Alta Conversão

Landing page de alto padrão para **Jheny Piercer | Body Piercing & Joalheria de Luxo**, desenvolvida com Next.js (App Router), Tailwind CSS v4, TypeScript, e componentes interativos inspirados em estética editorial de alta joalheria (Luxora style) e padrões 21st.dev / Aceternity UI.

---

## 💎 Identidade & Conceito Visual
- **Paleta de Cores (Baseada na Referência Luxora):** Fundo preto profundo (`#060607`), superfícies em grafite nobre (`#0c0c11`), bordas sutis com brilho âmbar/ouro (`rgba(212, 175, 55, 0.22)`), e gradientes em ouro champanhe (`#d4af37`, `#e2c285`, `#f5e6c8`).
- **Tipografia Editorial:** `Cormorant Garamond` (serifa clássica de alta joalheria) combinada com `Plus Jakarta Sans` (geométrica limpa e legível).
- **Integração Orgânica das Imagens:** Máscaras suaves (`mask-radial-editorial` e `mask-bottom-fade`) para que a foto da profissional (Jheny) e as macrofotografias das orelhas se fundam organicamente no layout sem cortes secos ou molduras amadoras.

---

## 🏛️ Estrutura das Seções

1. **Navbar Ultrafina & Transparente:**
   - Logomarca minimalista com ícone de joia.
   - Links de navegação suaves (`Procedimentos`, `Galeria`, `Biossegurança`, `Sobre a Profissional`, `Depoimentos`, `Localização`).
   - Botão tipo pílula discreto `[ Agendar Horário ]`.
   - Menu responsivo para dispositivos móveis.

2. **Hero Section (100vh Editorial & Limpo):**
   - Título refinado: *"A arte do body piercing com elegância, precisão e biossegurança."*
   - Subtítulo leve destacando o estúdio em Rondonópolis - MT.
   - Retrato da proprietária Jheny (Foto 2) com máscara radial suave e ambient glow dourado.
   - Badges flutuantes discretos: *"6x Premiada"* e *"Biossegurança Total"*.
   - Botão principal: `[ Agendar Procedimento via WhatsApp ]`.
   - Indicador de rolagem: *"Role para conhecer ↓"*.

3. **Procedimentos & Especialidades (Bento Grid com Spotlight):**
   - **Perfurações Clássicas & Avançadas:** Mapeamento anatômico da orelha (hélix, conch, tragus, transversal) e faciais com titânio ASTM F-136.
   - **Implantes Microdermal & Surface:** Técnicas avançadas de fixação estética com alta precisão e durabilidade.
   - **Laserterapia Pós-Perfuração:** Aceleração biológica da cicatrização, diminuição de inchaço e alívio do desconforto.
   - **Lobuloplastia Não Cirúrgica:** Correção e fechamento de lóbulos rasgados/alargados sem intervenção de cortes agressivos.

4. **Galeria de Obras Reais & Joalheria (Fotos Oficiais 3, 4 e 5):**
   - Portfólio com fotos reais de atendimentos de Jheny.
   - Lightbox / Modal interativo para visualização em alta definição.
   - Tags com especificações de metais e zircônias.
   - Filtros por categoria e botão direto para reproduzir o projeto no WhatsApp.

5. **Autoridade & Biossegurança Hospitalar:**
   - Trajetória de 6 anos (desde 2019), 6 prêmios e +20 certificações.
   - Os 5 pilares clínicos: Autoclave Hospitalar Classe B, Joias Esterilizadas Individualmente, Agulhas Americanas 100% Descartáveis, Titânio Grau Implante F-136 e Assepsia Cirúrgica do Espaço.

6. **Depoimentos Reais (Google Reviews 5 Estrelas):**
   - Grade elegante com depoimentos verificados de clientes destacando esterilização, higiene impecável e cuidado humanizado.

7. **Localização & Atendimento com Hora Marcada:**
   - Endereço oficial: R. Alcides Rodrigues Junior, 1075 - QD 37, LT 1075, Núcleo Hab. São José Um, Rondonópolis - MT.
   - Horários: Segunda a Domingo, das 09:00 às 18:00 (Atendimento com hora marcada).
   - Botão para traçar rota direta no Google Maps / Waze.

8. **Instagram & Portfólio Social:**
   - Conexão oficial com `@jhenypiercer` e página no Facebook.

9. **Triagem Interativa & Agendamento Final:**
   - Formulário de triagem rápida onde o cliente seleciona seu interesse (*Primeira Perfuração*, *Lobuloplastia Sem Corte*, *Laserterapia*, *Troca de Joia*, *Microdermal*) e já é direcionado ao WhatsApp (+55 (66) 9916-2937) com mensagem formatada.

10. **Botão Flutuante de WhatsApp:**
    - Botão sticky no canto inferior direito com pulso de atenção e pop-up com respostas rápidas pré-configuradas.

---

## 🚀 Como Executar o Projeto

```bash
# Entrar no diretório do projeto
cd C:\Users\nru62\.gemini\antigravity-ide\scratch\jheny-piercer

# Instalar dependências (já executado)
npm install

# Rodar o servidor de desenvolvimento
npm run dev

# Gerar build de produção
npm run build
```

---

## 📸 Como Adicionar Novas Fotos ao Portfólio

Para adicionar novas fotos ao carrossel e galeria de trabalhos:
1. Copie suas novas imagens para a pasta: `public/images/` (ex: `portfolio-4.jpg`).
2. Abra o arquivo `src/data/content.ts`.
3. Adicione um novo item na lista `GALLERY_ITEMS`:
```typescript
{
  id: "gal-4",
  image: "/images/portfolio-4.jpg",
  title: "Nome do Projeto / Perfuração",
  category: "Visagismo Auricular",
  metal: "Titânio ASTM F-136",
  description: "Descrição detalhada do arranjo...",
}
```
A página atualizará automaticamente!
