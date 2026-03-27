# Proyecto VigIA: Contexto de Negocio y Tecnológico para Versión Web

Este documento contiene todo el contexto necesario del proyecto **VigIA** para ser utilizado como "System Prompt" o "Base de Conocimiento" en el desarrollo de una nueva versión web utilizando **Next.js**.

---

## 1. Identidad de Marca y Misión

**Nombre:** VigIA (Vigilancia + IA)
**Eslogan:** "Tus derechos no se detienen en la vía."
**Misión:** Empoderar a los conductores colombianos con conocimiento jurídico especializado y herramientas de evidencia digital en tiempo real durante procedimientos de tránsito.

### Propuesta de Valor (Lo que "vende" VigIA)
VigIA no vende información (la cual es pública), vende **conveniencia y seguridad**:
1.  **Inmediatez:** Respuestas legales en < 5 segundos ante un oficial.
2.  **Evidencia:** Grabación de video/audio de alta calidad pensada para validez judicial.
3.  **Simplificación:** Traduce códigos legales complejos (A01 a J99) a lenguaje ciudadano.
4.  **Centralización:** RUNT, SIMIT y Normativa en un solo lugar.

---

## 2. Pilares Funcionales (Core Features)

### 🧠 Módulo AI Legal (VigIA AI)
*   **Rol:** Un abogado experto en tránsito de bolsillo.
*   **Base de Conocimiento:**
    *   Ley 769 de 2002 (Código Nacional de Tránsito de Colombia).
    *   Ley 1801 de 2016 (Código Nacional de Policía).
    *   Tabla oficial de multas (Infracciones A, B, C, D, E, F, G, H, I, J).
    *   Resoluciones del Ministerio de Transporte.
*   **Comportamiento IA:** Debe citar artículos exactos, indicar si hay inmovilización y dar frases literales para que el ciudadano diga.

### 🎥 Centro de Grabación Segura
*   **Web Implementation:** Utilizar `MediaDevices API` y `MediaRecorder`.
*   **Almacenamiento:** Priorizar almacenamiento local (IndexedDB o descarga directa) para mantener la privacidad.
*   **UX:** Debe permitir grabar mientras el usuario consulta la IA o los códigos legales (Multitarea).

### 🌐 Consultas Oficiales
*   Integración fluida con:
    *   **RUNT:** Trámites de licencias y vehículos.
    *   **SIMIT:** Multas y comparendos.
*   **Web Strategy:** Enlaces directos o iframes controlados con estados de carga premium.

### 👤 Gestión de Vehículos y Perfil
*   Permitir al usuario registrar sus placas, modelo y fecha de tecnomecánica/SOAT.
*   Notificaciones de vencimiento.

---

## 3. Guía de Diseño (Premium Look & Feel)

Para la versión web en Next.js, se busca una estética **Vibrante, Moderna y Premium**:

*   **Tipografía:** `Outfit` (Google Fonts). De diseño limpio y geométrico.
*   **Paleta de Colores:** 
    *   **Primario:** Azul Eléctrico o Índigo Vibrante (`#3b82f6` o similares).
    *   **Acentos:** Gradientes de Cian a Púrpura.
    *   **Modo:** Dark Mode por defecto (Fondo `#0f172a`, Tarjetas `#1e293b`).
*   **Estilo Visual:**
    *   **Glassmorphism:** Tarjetas con sutil transparencia y desenfoque (`backdrop-filter: blur(10px)`).
    *   **Bordes:** Redondeados (`rounded-2xl` o `rounded-3xl`).
    *   **Animaciones:** Transiciones suaves de entrada, micro-interacciones en botones.

---

## 4. Stack Técnico Sugerido (Next.js)

Para replicar el éxito de la App en Web:

*   **Framework:** Next.js 15+ (App Router).
*   **Estilos:** CSS Modules o Tailwind CSS (para rapidez de desarrollo premium).
*   **Auth:** Firebase Authentication (Google Sign-In).
*   **Base de Datos:** Cloud Firestore para sincronización de vehículos y perfil.
*   **IA:** Vercel AI SDK + OpenAI (GPT-4o) con RAG local para la base legal.
*   **Hosting:** Vercel para mayor performance y despliegue continuo.

---

## 5. Marco Legal Colombiano (Para el Motor AI y Landing)

**Artículo Clave (El "Superpoder"):**
*   **Ley 1801 de 2016, Art. 21:** "Todo procedimiento policivo podrá ser grabado mediante cualquier medio de las tecnologías de información y comunicación, sin que ninguna persona pueda impedirlo, so pena de incurrir en falta disciplinaria."

**Argumentos de Defensa:**
1.  **Competencia:** Solo la Policía de Tránsito puede imponer comparendos, no la de Vigilancia.
2.  **Due Process:** La grabación es un derecho para garantizar la transparencia.

---

## 6. Prompt Base para el Nuevo Proyecto (Copiar y Pegar)

> "Estoy creando la versión web de **VigIA**, una plataforma LegalTech premium para conductores colombianos. 
> 
> El objetivo es construir una App Web con Next.js que use un diseño vibrante (Dark Mode, Glassmorphism, tipografía Outfit). 
> 
> Funcionalidades clave: 
> 1. Un chat de IA (VigIA AI) entrenado en el Código Nacional de Tránsito (Ley 769/2002) y Código de Policía (Ley 1801/2016) que proporcione respuestas rápidas y citas legales exactas.
> 2. Una sección de grabación que use la cámara del navegador para documentar procedimientos.
> 3. Dashboard de gestión de vehículos con alertas de SOAT y Tecnomecánica.
> 4. Landing Page de alta conversión que resalte el derecho a grabar (Art. 21 Ley 1801).
> 
> Prioriza la estética premium y la velocidad de carga. Utiliza Firebase para la persistencia."

---
