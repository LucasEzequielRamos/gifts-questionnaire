import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import type { Gift } from "../../types/gift";
import type { GiftScore } from "../../lib/calculateResults";
import { giftColorHex } from "../../lib/giftColorHex";

interface Props {
  name: string;
  results: GiftScore[];
  gifts: Gift[];
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
    color: "#1e293b",
  },
  coverTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
  },
  coverSubtitle: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 24,
  },
  coverName: {
    fontSize: 18,
    marginBottom: 4,
  },
  coverDate: {
    fontSize: 10,
    color: "#94a3b8",
    marginBottom: 24,
  },
  disclaimer: {
    marginTop: 30,
    padding: 16,
    backgroundColor: "#f0f9ff",
    borderRadius: 8,
    fontSize: 10,
    lineHeight: 1.5,
    color: "#334155",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  rankRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  rankBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#e2e8f0",
    textAlign: "center",
    fontSize: 11,
    paddingTop: 5,
    marginRight: 10,
  },
  rankName: {
    fontSize: 12,
    fontWeight: "bold",
  },
  rankScore: {
    fontSize: 10,
    color: "#64748b",
  },
  giftHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  giftIcon: {
    width: 26,
    height: 26,
    borderRadius: 13,
    marginRight: 10,
  },
  giftName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  giftScore: {
    fontSize: 10,
    color: "#64748b",
  },
  h4: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 6,
  },
  li: {
    fontSize: 10,
    marginBottom: 3,
    lineHeight: 1.4,
  },
  verseRef: {
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 4,
  },
  verseText: {
    fontSize: 10,
    fontStyle: "italic",
    color: "#475569",
    marginBottom: 6,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 40,
    right: 40,
    fontSize: 8,
    color: "#94a3b8",
    textAlign: "center",
  },
});

export default function GiftReportDocument({ name, results, gifts }: Props) {
  const top3 = results.slice(0, 3);

  return (
    <Document>
      {/* Portada */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.coverTitle}>Informe de dones espirituales</Text>
        <Text style={styles.coverSubtitle}>
          Basado en tus respuestas al cuestionario
        </Text>
        {name ? <Text style={styles.coverName}>{name}</Text> : null}
        <Text style={styles.coverDate}>
          {new Date().toLocaleDateString("es-AR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </Text>

        <Text style={styles.sectionTitle}>Tu top 3</Text>
        {top3.map((result, index) => {
          const info = gifts.find(g => g.id === result.gift);
          if (!info) return null;
          return (
            <View key={result.gift} style={styles.rankRow}>
              <Text style={styles.rankBadge}>{index + 1}</Text>
              <View>
                <Text style={styles.rankName}>{info.name}</Text>
                <Text style={styles.rankScore}>
                  {result.score}/{info.maxScore} puntos
                </Text>
              </View>
            </View>
          );
        })}

        <Text style={styles.disclaimer}>
          Este informe refleja las áreas donde tus respuestas muestran una mayor
          afinidad con determinados dones espirituales. Es una herramienta de
          reflexión y debe complementarse con oración, servicio y el
          acompañamiento de líderes espirituales.
        </Text>

        <Text style={styles.footer} fixed>
          Cuestionario de dones espirituales
        </Text>
      </Page>

      {/* Una página por cada don, ordenado de mayor a menor puntaje */}
      {results.map(result => {
        const gift = gifts.find(g => g.id === result.gift);
        if (!gift) return null;

        const color = giftColorHex[gift.color] ?? "#475569";

        return (
          <Page key={gift.id} size="A4" style={styles.page}>
            <View style={styles.giftHeader}>
              <View style={[styles.giftIcon, { backgroundColor: color }]} />
              <View>
                <Text style={styles.giftName}>{gift.name}</Text>
                <Text style={styles.giftScore}>
                  {result.score}/{gift.maxScore} puntos
                </Text>
              </View>
            </View>

            <Text style={styles.h4}>¿Qué significa?</Text>
            <Text style={styles.li}>
              {gift.description || "Próximamente..."}
            </Text>

            {gift.strengths.length > 0 && (
              <>
                <Text style={styles.h4}>Fortalezas</Text>
                {gift.strengths.map(item => (
                  <Text key={item} style={styles.li}>
                    • {item}
                  </Text>
                ))}
              </>
            )}

            {gift.risks.length > 0 && (
              <>
                <Text style={styles.h4}>Riesgos</Text>
                {gift.risks.map(item => (
                  <Text key={item} style={styles.li}>
                    • {item}
                  </Text>
                ))}
              </>
            )}

            {gift.development.length > 0 && (
              <>
                <Text style={styles.h4}>Cómo desarrollarlo</Text>
                {gift.development.map(item => (
                  <Text key={item} style={styles.li}>
                    • {item}
                  </Text>
                ))}
              </>
            )}

            {gift.characters.length > 0 && (
              <>
                <Text style={styles.h4}>Personajes bíblicos</Text>
                <Text style={styles.li}>{gift.characters.join(" · ")}</Text>
              </>
            )}

            {gift.verses.length > 0 && (
              <>
                <Text style={styles.h4}>Versículos</Text>
                {gift.verses.map(verse => (
                  <View key={verse.reference}>
                    <Text style={styles.verseRef}>{verse.reference}</Text>
                    <Text style={styles.verseText}>{verse.text}</Text>
                  </View>
                ))}
              </>
            )}

            <Text
              style={styles.footer}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
              fixed
            />
          </Page>
        );
      })}
    </Document>
  );
}
