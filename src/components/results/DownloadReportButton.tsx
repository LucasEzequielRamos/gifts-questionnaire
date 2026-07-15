import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import type { Gift } from "../../types/gift";
import type { GiftScore } from "../../lib/calculateResults";

interface Props {
  name: string;
  results: GiftScore[];
  gifts: Gift[];
}

export default function DownloadReportButton({ name, results, gifts }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleDownload() {
    setLoading(true);

    try {
      // Se cargan recién acá, no en el bundle inicial de la página.
      const [{ pdf }, { default: GiftReportDocument }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("./GiftReportDocument"),
      ]);

      const blob = await pdf(
        <GiftReportDocument name={name} results={results} gifts={gifts} />,
      ).toBlob();

      const url = URL.createObjectURL(blob);
      const fileName = `dones-${
        name ? name.toLowerCase().replace(/\s+/g, "-") : "informe"
      }.pdf`;

      // En iOS Safari el atributo "download" suele ignorarse y el PDF
      // se abre directo en el visor nativo: el usuario igual puede
      // guardarlo o compartirlo desde ahí, así que funciona en ambos casos.
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => URL.revokeObjectURL(url), 10_000);
    } catch (error) {
      console.error("Error generando el PDF:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-4 font-semibold text-white transition active:scale-[0.98] disabled:opacity-60"
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin" size={20} />
          Generando PDF...
        </>
      ) : (
        <>
          <Download size={20} />
          Descargar informe en PDF
        </>
      )}
    </button>
  );
}
