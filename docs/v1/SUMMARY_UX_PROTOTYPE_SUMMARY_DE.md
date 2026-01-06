# MIRA UX-Prototyp - Zusammenfassungsdokument

**Dokumentversion:** 1.0  
**Erstellt durch:** roberto@fognini.tech
**Datum:** 2025-12-29  
**Zweck:** Zusammenfassung des UX-Prototyp-Umfangs, der Lieferungen, Datenarchitektur und Branding

---

## Dokumentenhinweis

**KI-unterstützter Engineering-Prozess**

Dieses Dokument wurde automatisch als Teil eines KI-unterstützten Engineering-Prozesses generiert. Diese Lösung ist **ausschließlich als UX-Mock-Prototyp** für die Validierung und Demonstration der Benutzererfahrung gedacht.

**Umfang und Einschränkungen:**

- **Zweck**: Nur fit-for-purpose UX-Validierung
- **Technische Überprüfung**: Der Umfang umfasste keine Überprüfung oder Validierung der technischen Korrektheit, DevSecOps-Praktiken oder umfassender Dokumentationsstandards
- **Nicht produktionsreif**: Dieser Prototyp ist nicht für den Produktionseinsatz bestimmt und wurde keiner vollständigen technischen Überprüfung unterzogen
- **Dokumentationsstatus**: Die Genauigkeit und Vollständigkeit der Dokumentation wurden nicht unabhängig überprüft

Dieser Prototyp dient als visuelle und interaktive Referenz für die Validierung der Benutzererfahrung vor Beginn der Produktionsentwicklung.

---

## Executive Summary

Der MIRA UX-Prototyp ist eine vollständig interaktive, klickbare Demonstration der kompletten MIRA-Plattform-Erfahrung. Er wurde erstellt, um Benutzerreisen zu validieren, alle MVP-Bildschirme zu demonstrieren und sicherzustellen, dass die Benutzererfahrung die Geschäftsziele erfüllt, bevor die Entwicklung beginnt.

**Hauptlieferungen:**
- **61 vollständig interaktive Bildschirme** für alle MVP-Funktionen
- **8 vollständige Benutzerreisen** für drei primäre Personas (Reseller, Kunde, Admin)
- **Mobile-responsive Design** mit dem MIRA Design-System
- **Selbstständiger Prototyp**, der als ZIP-Datei geteilt oder auf statischem Hosting bereitgestellt werden kann

---

## 1. Umfang und High-Level-Anforderungen

### 1.1 Projektumfang

Der Prototyp wurde entwickelt, um die komplette MVP-Benutzererfahrung für drei primäre Benutzertypen zu validieren:

#### Primäre Ziele
1. **Benutzerreisen validieren**: Vollständige Benutzerabläufe von der Registrierung bis zu Kernaktivitäten testen
2. **Bildschirmlayouts demonstrieren**: Alle MVP-Bildschirme mit realistischen Inhalten und Interaktionen zeigen
3. **Navigationsmuster testen**: Intuitive Navigation und Rollenwechsel sicherstellen
4. **Inhalte und Messaging überprüfen**: Texte, Labels und Kommunikationsklarheit validieren
5. **Design-System-Validierung**: Konsistente Anwendung von Design-Tokens und Komponenten sicherstellen

#### Umfangsgrenzen

**Im Umfang:**
- Alle MVP-Bildschirme (61 Bildschirme insgesamt)
- Vollständige Benutzerreisen für Reseller-, Kunden- und Admin-Personas
- Rollenbasierte Navigation und Inhaltswechsel
- Mock-Daten, die realistische Plattformzustände darstellen
- Visuelle Design-System-Implementierung
- Interaktive Navigation und Formularabläufe
- Mobile-responsive Layouts

**Außerhalb des Umfangs:**
- Echte Backend-API-Integration
- Tatsächliche Datenpersistenz
- Echte Authentifizierung und Autorisierung
- Datei-Upload/Download-Funktionalität
- Echtzeit-Updates und WebSocket-Verbindungen
- Komplexe Geschäftslogik-Berechnungen
- Tiefe CRUD-Operationen (Erstellen/Bearbeiten-Formulare)
- Export-Funktionalität (tatsächliche Dateigenerierung)
- E-Mail-Funktionalität
- Zahlungsabwicklung

### 1.2 High-Level-Anforderungen

#### Funktionale Anforderungen
1. **Rollenbasierter Zugriff**: Benutzer können zwischen Reseller-, Kunden- und Admin-Ansichten wechseln
2. **Vollständige Navigation**: Alle Bildschirme über Navigationsmenü und direkte Links erreichbar
3. **Mock-Daten-Anzeige**: Alle Bildschirme zeigen realistische Mock-Daten
4. **Formularinteraktionen**: Formulare akzeptieren Eingaben und zeigen Validierungszustände (nur visuell)
5. **Mehrstufige Abläufe**: Assessment- und Checkout-Abläufe mit Fortschrittsanzeigen
6. **Datenvisualisierung**: Netzwerkbäume, Diagramme, Fortschrittsbalken und Impact-Zähler
7. **Passwortschutz**: Einfacher Demo-Passwortschutz zum Teilen

#### Nicht-funktionale Anforderungen
1. **Performance**: Schnelle Seitenladezeiten und flüssige Navigation
2. **Responsivität**: Funktioniert auf Desktop, Tablet und Mobilgeräten
3. **Barrierefreiheit**: WCAG 2.1 Level AA Konformität (Design-System-Ebene)
4. **Teilbarkeit**: Kann als ZIP-Datei verpackt oder auf statischem Hosting bereitgestellt werden
5. **Wartbarkeit**: Saubere Codestruktur mit `@mira/ui` Komponenten

---

## 2. Was wurde geliefert

### 2.1 Funktionsfähiger Prototyp

Der Prototyp ist eine vollständig funktionsfähige, interaktive Webanwendung, erstellt mit:
- **Framework**: Vite + React (TypeScript)
- **Styling**: Tailwind CSS mit MIRA Design-Tokens
- **UI-Komponenten**: `@mira/ui` Paket
- **Build-Ausgabe**: Statische HTML/CSS/JS-Dateien
- **Tests**: Vitest (Unit) + Playwright (E2E)

**Hauptfunktionen:**
- Passwortgeschützter Zugriff (Demo-Passwort)
- Rollenwechsel in der oberen Navigation
- Sitemap-Navigation zum Durchsuchen aller Bildschirme
- Vollständige Benutzerreisen von Anfang bis Ende navigierbar
- Realistische Mock-Daten durchgehend
- Mobile-responsive Design

### 2.2 Implementierte Bildschirme (61 insgesamt)

#### Authentifizierung (6 Bildschirme)
1. **Login** - Mit Rollenauswahl für Reseller, Kunde, Admin
2. **Reseller registrieren** - Vollständiges Registrierungsformular
3. **Kunde registrieren** - Vollständiges Registrierungsformular
4. **Passwort vergessen** - Passwort-Wiederherstellung starten
5. **Passwort zurücksetzen** - Passwort-Reset abschließen
6. **E-Mail-Verifizierung** - Konto-Verifizierungsbildschirm

#### Reseller-Erfahrung (21 Bildschirme)

**Onboarding-Reise (6 Bildschirme):**
7. **Assessment-Einführung** - Einverständnis und Einführung
8. **Assessment-Fragen** - 12-Fragen-Mehrschritt-Fragebogen
9. **Assessment-Ergebnis** - Segmentzuweisung anzeigen
10. **Onboarding-Checkliste** - Fortschrittsverfolger mit Abschlusszuständen
11. **Schulungsschritt** - Inhaltsbereitstellungs-Interface
12. **Vereinbarungsschritt** - AGB und Vereinbarung akzeptieren

**Dashboard & Verwaltung (9 Bildschirme):**
13. **Dashboard-Startseite** - Hero Board, Rang-Tracker, Statistiken-Übersicht
14. **Einnahmen-Übersicht** - Monatliche Zusammenfassung mit Provisionsaufschlüsselung
15. **Provisionsverlauf** - Detaillierte Transaktionsliste
16. **Netzwerkbaum** - Visuelle Netzwerkhierarchie
17. **Teamliste** - Tabellenansicht der Teammitglieder
18. **Impact-Übersicht** - Impact-Zähler und Metriken
19. **Impact-Meilensteine** - Meilenstein-Errungenschaften
20. **Abzeichen & Errungenschaften** - Gamification-Sammlung
21. **Bestenliste** - Rankings und Wettbewerbsanzeige

**Reseller-Dashboard (6 Bildschirme):**
22. **Reseller-Dashboard** - Haupt-Dashboard-Container
23. Zusätzliche Dashboard-Ansichten in Haupt-Dashboard integriert

#### Kunden-Erfahrung (18 Bildschirme)

**Einkaufsreise (6 Bildschirme):**
24. **Produktkatalog** - Produktdurchsicht mit Filtern
25. **Produktdetail** - Produktinformationen und Auswahl
26. **Warenkorb** - Warenkorb-Überprüfung mit Empfehlungscode-Eingabe
27. **Checkout: Lieferung** - Adress-Eingabeformular
28. **Checkout: Zahlung** - Zahlungsmethode auswählen
29. **Bestellbestätigung** - Erfolgsbildschirm mit Impact-Zusammenfassung

**Kontoverwaltung (4 Bildschirme):**
30. **Kunden-Dashboard-Startseite** - Impact-Zusammenfassung und Übersicht
31. **Meine Abonnements** - Abonnementliste und Verwaltung
32. **Abonnement-Detail** - Abonnement-Änderungs-Interface
33. **Bestellverlauf** - Liste vergangener Käufe

**Kunden-Gamification (4 Bildschirme):**
34. **Kunden-Impact-Übersicht** - Impact-Metriken-Anzeige
35. **Kunden-Meilensteine** - Meilenstein-Errungenschaften
36. **Kunden-Abzeichen & Errungenschaften** - Abzeichen-Sammlung
37. **Kunden-Bestenliste** - Kunden-Rankings

**Kunden-Shop (4 Bildschirme):**
38. **Kunden-Shop** - Haupt-Shop-Container
39. Zusätzliche Shop-Ansichten integriert

#### Admin-Erfahrung (8 Bildschirme)
40. **Admin-Übersicht** - Plattform-Metriken-Dashboard
41. **Reseller-Liste** - Benutzerverwaltung mit Suche/Filter
42. **Kunden-Liste** - Benutzerverwaltung mit Suche/Filter
43. **Bestellverwaltung** - Bestellliste und Verwaltung
44. **Provisionskonfiguration** - Regelkonfiguration mit Vorschau
45. **Provisionsbuch** - Detailliertes Transaktionsbuch
46. **Audit-Protokoll** - Aktivitätsverlauf mit Filtern
47. **Systemeinstellungen** - Plattform-Konfiguration

#### Einstellungen (7 Bildschirme)
48. **Profileinstellungen** - Benutzerprofil-Verwaltung
49. **Sicherheitseinstellungen** - Passwort- und Sitzungsverwaltung
50. **Benachrichtigungseinstellungen** - Benachrichtigungseinstellungen
51. **Auszahlungseinstellungen** - Reseller-Auszahlungskonfiguration
52. **Adressbuch** - Versandadressen (Kunde)
53. **Zahlungsmethoden** - Zahlungskarten (Kunde)
54. **Datenschutz & Daten** - Datenschutzeinstellungen

#### Gamification-Konzept (11 Bildschirme)
55. **Gamification-Konzept-Übersicht** - System-Erklärung
56. **Gamification-Dashboard** - Persönliche Gamification-Ansicht
57. **Gamification-Herausforderungen** - Herausforderungen-Interface
58. **Gamification-Level** - Fortschrittssystem
59. **Gamification-Serien** - Serien-Tracking
60. **Gamification-Errungenschaften** - Errungenschaften-Übersicht
61. **Gamification-Abzeichen** - Abzeichen-Sammlung
62. **Gamification-Bestenlisten** - Bestenlisten-System
63. **Gamification-Multiplikatoren** - Multiplikatoren und Boni
64. **Gamification-Impact-Meilensteine** - Impact-Meilensteine
65. **Gamification-Benachrichtigungen** - Benachrichtigungen und Alerts

### 2.3 Implementierte Benutzerreisen (8 vollständige Reisen)

#### Reise 1: Reseller-Onboarding ✅
**Ziel:** Neuer Reseller registriert sich erfolgreich, absolviert Assessment und erreicht Dashboard

**Ablauf:**
1. Als Reseller registrieren
2. E-Mail verifizieren
3. Einloggen
4. Assessment abschließen (12 Fragen)
5. Segmentzuweisung ansehen
6. Onboarding-Checkliste abschließen
7. Schulungsinhalt überprüfen
8. AGB und Vereinbarung akzeptieren
9. Dashboard betreten

**Bildschirme:** 9 Bildschirme | **Status:** Vollständig

#### Reise 2: Erste Kundenakquise ✅
**Ziel:** Reseller akquiriert ersten Kunden über Empfehlungscode

**Ablauf:**
1. Dashboard ansehen und Empfehlungscode finden
2. Empfehlungscode kopieren und teilen
3. Benachrichtigung erhalten, wenn Kunde Code verwendet
4. Aktualisierte Einnahmen ansehen
5. Provisionsdetails prüfen

**Bildschirme:** 3 Bildschirme | **Status:** Vollständig

#### Reise 3: Tägliches Engagement ✅
**Ziel:** Reseller hält Serie aufrecht und prüft Fortschritt

**Ablauf:**
1. Einloggen
2. Dashboard mit Serien-Indikator ansehen
3. Einnahmen und Statistiken prüfen
4. Bestenlisten-Position überprüfen
5. Rang-Fortschritt prüfen
6. Impact-Metriken ansehen

**Bildschirme:** 4 Bildschirme | **Status:** Vollständig

#### Reise 4: Teambuilding ✅
**Ziel:** Reseller rekrutiert erstes Teammitglied

**Ablauf:**
1. Netzwerkbaum ansehen
2. Mehrstufige Provisionsvorteile verstehen
3. Rekrutierungslink erhalten
4. Möglichkeit teilen
5. Benachrichtigung über neuen Rekruten erhalten
6. Aktualisiertes Netzwerk ansehen

**Bildschirme:** 3 Bildschirme | **Status:** Vollständig

#### Reise 5: Kunden-Entdeckung und Kauf ✅
**Ziel:** Kunde entdeckt MIRA, lernt über Impact und kauft Abonnement

**Ablauf:**
1. Produktkatalog durchsuchen
2. Produktdetails ansehen
3. In Warenkorb legen
4. Empfehlungscode eingeben
5. Checkout abschließen (Lieferung und Zahlung)
6. Bestellbestätigung ansehen
7. Impact-Beitrag sehen

**Bildschirme:** 7 Bildschirme | **Status:** Vollständig

#### Reise 6: Abonnement-Verwaltung ✅
**Ziel:** Kunde verwaltet sein Abonnement

**Ablauf:**
1. Einloggen
2. Abonnementliste ansehen
3. Abonnement-Detail öffnen
4. Häufigkeit ändern oder pausieren
5. Änderungen bestätigen

**Bildschirme:** 3 Bildschirme | **Status:** Vollständig

#### Reise 7: Admin-Tagesgeschäft ✅
**Ziel:** Admin überwacht Plattform-Gesundheit und löst Probleme

**Ablauf:**
1. In Admin-Dashboard einloggen
2. Plattform-Übersicht und Metriken ansehen
3. Alerts überprüfen
4. Nach Benutzer suchen
5. Benutzer-Detail ansehen
6. Maßnahme ergreifen
7. Audit-Protokoll überprüfen

**Bildschirme:** 6 Bildschirme | **Status:** Vollständig

#### Reise 8: Provisionskonfiguration ✅
**Ziel:** Admin aktualisiert Provisionsregeln und stellt Änderungen bereit

**Ablauf:**
1. Zur Provisionskonfiguration navigieren
2. Aktuelle Sätze überprüfen
3. Provisionssätze bearbeiten
4. Auswirkung der Änderungen in Vorschau ansehen
5. Genehmigen und bereitstellen
6. Im Audit-Protokoll verifizieren

**Bildschirme:** 3 Bildschirme | **Status:** Vollständig

---

## 3. Datenarchitektur des UX-Mocks

### 3.1 Informationsobjekte

Der Prototyp verwendet eine umfassende Mock-Datenstruktur, definiert in `src/data/mockData.ts`. Alle Daten sind hardcodiert und stellen realistische Plattformzustände dar.

#### Kern-Entitäten

**Reseller-Objekt:**
```typescript
interface Reseller {
  id: string;
  name: string;
  email: string;
  rank: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
  segment: 'Novice' | 'Active' | 'Growth' | 'Ambassador';
  referralCode: string;
  joinDate: string;
  networkSize: number;
  teamSize: number;
  earnings: {
    thisMonth: number;
    lastMonth: number;
    total: number;
    available: number;
  };
  impact: {
    foodKg: number;
    neuterings: number;
    animalsHelped: number;
  };
  streak: {
    current: number;
    longest: number;
  };
  badges: string[];
}
```

**Kunden-Objekt:**
```typescript
interface Customer {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  orders: number;
  subscriptions: number;
  totalSpent: number;
  impact: {
    foodKg: number;
    neuterings: number;
    animalsHelped: number;
  };
  streak: {
    current: number;
    longest: number;
  };
  level: number;
  levelName?: string;
  paws: number;  // Kunden-XP-Äquivalent
  pawsToNextLevel: number;
  badges: string[];
  rewardsAvailable?: number;
}
```

**Produkt-Objekt:**
```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  category: 'dog' | 'cat' | 'treat';
  skus: SKU[];
  imageUrl?: string;
}

interface SKU {
  id: string;
  weight: number;
  price: number;
  impactMultiplier: number; // kg gespendet pro kg gekauft
}
```

**Bestell-Objekt:**
```typescript
interface Order {
  id: string;
  customerId: string;
  resellerId?: string;
  date: string;
  status: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'completed';
  items: OrderItem[];
  total: number;
  impact: {
    foodKg: number;
    neuterings: number;
  };
}
```

**Provisions-Objekt:**
```typescript
interface Commission {
  id: string;
  resellerId: string;
  orderId: string;
  date: string;
  amount: number;
  level: 1 | 2 | 3 | 4;
  type: 'unilevel' | 'rank-bonus';
  status: 'pending' | 'paid';
}
```

**Netzwerk-Knoten-Objekt:**
```typescript
interface NetworkNode {
  id: string;
  name: string;
  rank: string;
  joinDate: string;
  personalVolume: number;
  teamVolume: number;
  directReports: number;
  children?: NetworkNode[];  // Rekursive Struktur
}
```

**Bestenlisten-Eintrag-Objekt:**
```typescript
interface LeaderboardEntry {
  rank: number;
  resellerId: string;
  name: string;
  earnings: number;
  teamSize: number;
  rankBadge: string;
}
```

**VETO-Integrations-Objekte:**
```typescript
interface Shelter {
  id: string;
  name: string;
  country: string;
  city: string;
  focus: string[];
  monthlyNeedKg: number;
  currentAnimalCount: { dogs: number; cats: number };
  storyKey: string;
  urgencyLevel: 'NORMAL' | 'URGENT' | 'EMERGENCY';
  heroImageUrl?: string;
}

interface Campaign {
  id: string;
  name: string;
  type: 'EMERGENCY' | 'SEASONAL' | 'THEMATIC' | 'ONGOING';
  goalKg: number;
  currentKg: number;
  impactMultiplier: number;
  endDate?: string;
  urgencyStatement: string;
  status: 'UPCOMING' | 'ACTIVE' | 'COMPLETED';
  targetShelterIds: string[];
}

interface VerificationEvidence {
  id: string;
  shelterId: string;
  date: string;
  kgVerified: number;
  photoUrls: string[];
  status: 'APPROVED' | 'PENDING';
}
```

### 3.2 Datenverknüpfungen und Beziehungen

#### Primäre Beziehungen

1. **Reseller ↔ Bestellung**
   - Eins-zu-viele: Ein Reseller kann viele Bestellungen haben (über `resellerId` in Order)
   - Bestellungen verknüpfen mit Resellern für Provisionsberechnung

2. **Kunde ↔ Bestellung**
   - Eins-zu-viele: Ein Kunde kann viele Bestellungen haben (über `customerId` in Order)
   - Bestellungen verknüpfen mit Kunden für Kaufhistorie

3. **Bestellung ↔ Provision**
   - Eins-zu-viele: Eine Bestellung kann mehrere Provisionen generieren (verschiedene Ebenen)
   - Provisionen verknüpfen mit Bestellungen über `orderId`

4. **Reseller ↔ Netzwerkbaum**
   - Hierarchisch: Netzwerkknoten bilden eine Baumstruktur
   - Rekursive `children`-Eigenschaft erstellt mehrstufige Hierarchie
   - Jeder Knoten verknüpft mit Reseller über `id`

5. **Produkt ↔ Bestellung**
   - Viele-zu-viele: Bestellungen enthalten mehrere Produkte über `OrderItem[]`
   - Bestellpositionen verknüpfen mit Produkten über `productId` und `skuId`

6. **Reseller ↔ Bestenliste**
   - Eins-zu-eins: Jeder Bestenlisten-Eintrag verknüpft mit Reseller über `resellerId`

7. **Tierheim ↔ Kampagne**
   - Viele-zu-viele: Kampagnen zielen auf mehrere Tierheime über `targetShelterIds[]`
   - Tierheime können Teil mehrerer Kampagnen sein

8. **Tierheim ↔ Verifizierung**
   - Eins-zu-viele: Ein Tierheim kann viele Verifizierungsdatensätze haben
   - Verifizierungen verknüpfen mit Tierheimen über `shelterId`

#### Datenfluss-Beispiele

**Provisionsberechnungs-Fluss:**
```
Bestellung (ord-001) 
  → Kunde (cust-001) 
  → Reseller (res-001) [über resellerId]
  → Provision (comm-001) [Ebene 1]
  → Provision (comm-002) [Ebene 2, über Netzwerkbaum]
```

**Impact-Zuordnungs-Fluss:**
```
Bestellung (ord-001)
  → Bestellpositionen [Produkt + SKU]
  → Impact-Berechnung [Gewicht × impactMultiplier]
  → Reseller-Impact [kumulativ]
  → Kunden-Impact [kumulativ]
  → Plattform-Impact [aggregiert]
```

**Netzwerk-Hierarchie:**
```
Reseller (res-001) [Wurzel]
  → NetworkNode (res-001)
    → children: [
        NetworkNode (res-004) [Ebene 1]
          → children: [
              NetworkNode (res-005) [Ebene 2]
            ]
        NetworkNode (res-006) [Ebene 1]
      ]
```

### 3.3 Mock-Daten-Inventar

**Reseller:** 3 Mock-Reseller mit vollständigen Profilen
- Maria Schmidt (aktueller Benutzer, Gold-Rang)
- Anna K. (Platin-Rang)
- Thomas M. (Gold-Rang)

**Kunden:** 2 Mock-Kunden
- Thomas Weber (aktueller Benutzer, Level 3)
- Sarah Müller (Level 1)

**Produkte:** 3 Produkte mit mehreren SKUs
- Premium Hundefutter (4 SKUs)
- Bio-Katzenfutter (3 SKUs)
- Welpen-Starter-Paket (2 SKUs)

**Bestellungen:** 2 Mock-Bestellungen
- Bestellung 001: Abgeschlossen, verknüpft mit cust-001 und res-001
- Bestellung 002: Geliefert, verknüpft mit cust-002 und res-001

**Provisionen:** 2 Mock-Provisionen
- Provision 001: Ebene 1, verknüpft mit ord-001
- Provision 002: Ebene 2, verknüpft mit ord-002

**Netzwerkbaum:** 1 hierarchische Struktur
- Wurzel: Maria Schmidt
- Ebene 1: Klaus H., Peter W.
- Ebene 2: Sophie B. (unter Klaus H.)

**Bestenliste:** 5 Einträge
- Top 5 Reseller mit Rankings

**VETO-Integration:**
- 5 Mock-Tierheime (Spanien, Türkei, Rumänien, Marokko)
- 5 Mock-Kampagnen (Notfall, Saisonal, Thematisch)
- 4 Mock-Verifizierungsdatensätze

**Plattform-Metriken:**
- Gesamt-Reseller: 1.234
- Gesamt-Kunden: 5.678
- Gesamt-Bestellungen: 8.901
- Gesamt-Umsatz: €234.567
- Gesamt-Impact: 12.345 kg Futter, 82 Kastrationen, 2.469 Tieren geholfen

---

## 4. Branding-Konzept

### 4.1 Markengrundlage

**Markenname:** MIRA
**Markenwesen:** MIRA existiert an der Schnittstelle zwischen Handel und Mitgefühl. Jede Transaktion generiert verifizierbaren Tierwohl-Impact.

**Markenversprechen:** *Transparenter Impact, den Sie verifizieren können. Einkommen, dem Sie vertrauen können.*

**Markenpersönlichkeit:**
- **Vertrauenswürdig**: Klare Daten, verifizierte Beweise, ehrliche Kommunikation
- **Warm**: Menschliche Geschichten, Tierbilder, Feier des Impacts
- **Ermächtigend**: Fortschrittsvisualisierung, Anerkennung von Errungenschaften
- **Professionell**: Saubere Interfaces, zuverlässige Systeme, präzise Berechnungen
- **Transparent**: Offene Provisionsstrukturen, nachverfolgbare Spenden

### 4.2 Visuelle Identitätsposition

```
                    VERTRAUEN
                      │
        charity:water │  Stripe
        (Transparenz) │  (Professionalität)
                      │
    WARM ─────────────┼─────────────────── EFFIZIENT
                      │
           Chewy      │  Notion
        (Tierwärme)   │  (Klarheit)
                      │
                   ZUGÄNGLICH
```

**Primäre Einflüsse:**
- **charity:water**: Radikales Transparenzmodell mit Impact-Verifizierung
- **Chewy**: Warme, tierzentrierte Bildsprache und emotionale Verbindung
- **Stripe**: Dashboard-Klarheit, professionelle Datenpräsentation
- **Notion**: Saubere Informationsarchitektur, zurückhaltende Eleganz

### 4.3 Design-System-Architektur

Der Prototyp verwendet ein **Drei-Schichten-Token-System**:

1. **Semantische Tokens** (Komponenten-API)
   - `--button-primary-bg`, `--text-heading`, `--card-border`
   - Komponentenebene-Tokens, die auf primitive Tokens verweisen

2. **Primitive Tokens** (Marken-Palette)
   - `--color-forest-600`, `--color-amber-500`, `--color-slate-900`
   - Markenfarben, Abstände, Typografie, Schatten

3. **Rohwerte** (Absolute Werte)
   - `#059669`, `#F59E0B`, `16px`, `700`, `0.5rem`
   - Direkte CSS-Werte

**Vorteil:** Vollständiges Rebranding durch Änderung nur der primitiven Tokens

### 4.4 Farbsystem

#### Primärfarben

**Forest (Primäre Markenfarbe):**
- Repräsentiert: Natur, Wachstum, Tierarztversorgung, Vertrauen
- Primär: `#059669` (forest-600)
- Hover: `#047857` (forest-700)
- Aktiv: `#065F46` (forest-800)
- Vollständige Skala: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

**Amber (Akzent/Hervorhebung):**
- Repräsentiert: Wärme, Optimismus, Errungenschaft
- Primär: `#F59E0B` (amber-500)
- Hover: `#D97706` (amber-600)
- Vollständige Skala: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

**Slate (Neutrale):**
- Repräsentiert: Text, Hintergründe, Rahmen
- Primärtext: `#0F172A` (slate-900)
- Sekundärtext: `#475569` (slate-600)
- Rahmen: `#E2E8F0` (slate-200)
- Hintergrund: `#F8FAFC` (slate-50)
- Vollständige Skala: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

#### Statusfarben

**Grün (Erfolg):**
- 50, 500, 600, 700 Skalen
- Primär: `#22C55E` (green-500)

**Rot (Fehler):**
- 50, 500, 600, 700 Skalen
- Primär: `#EF4444` (red-500)

**Blau (Info):**
- 50, 500, 600, 700 Skalen
- Primär: `#3B82F6` (blue-500)

**Lila (Spezial/Akzent):**
- 50, 500, 600 Skalen
- Primär: `#A855F7` (purple-500)
- Verwendet für Kunden-"Paws"-System

#### Rangfarben (Gamification)
- Novize: `#94A3B8` (slate-400)
- Aktiv: `#3B82F6` (blue-500)
- Wachstum: `#8B5CF6` (purple-500)
- Botschafter: `#F59E0B` (amber-500)
- Diamant: `#EC4899` (pink-500)

### 4.5 Typografie-System

#### Schriftfamilien

**Überschriften-Schrift:** Plus Jakarta Sans
- Verwendet für: Überschriften (h1-h6), Display-Text, Metrikwerte
- Eigenschaften: Modern, geometrisch, freundlich
- Stack: `'Plus Jakarta Sans', system-ui, -apple-system, sans-serif`

**Text-Schrift:** Inter
- Verwendet für: Fließtext, Labels, Beschreibungen
- Eigenschaften: Sehr lesbar, neutral, professionell
- Stack: `'Inter', system-ui, -apple-system, sans-serif`

**Monospace-Schrift:** JetBrains Mono
- Verwendet für: Code, Daten, technische Informationen
- Eigenschaften: Klar, lesbar, technisch
- Stack: `'JetBrains Mono', 'Fira Code', 'Consolas', monospace`

#### Schriftgrößen

**Überschriften-Skala:**
- `text-display`: 3.5rem (56px) - Hero-Überschriften
- `text-h1`: 2.5rem (40px) - Seitentitel
- `text-h2`: 2rem (32px) - Abschnittstitel
- `text-h3`: 1.5rem (24px) - Unterabschnittstitel
- `text-h4`: 1.25rem (20px) - Kartentitel
- `text-h5`: 1.125rem (18px) - Kleine Überschriften
- `text-h6`: 1rem (16px) - Kleinste Überschriften

**Text-Skala:**
- `text-lg`: 1.125rem (18px) - Großer Fließtext
- `text-base`: 1rem (16px) - Standard-Fließtext
- `text-sm`: 0.875rem (14px) - Kleiner Text
- `text-xs`: 0.75rem (12px) - Bildunterschriften, Labels

**Spezial:**
- `text-metric`: 2rem (32px) - Große Zahlen, KPIs

#### Schriftstärken
- `font-light`: 300
- `font-normal`: 400 (Standard)
- `font-medium`: 500
- `font-semibold`: 600
- `font-bold`: 700
- `font-extrabold`: 800

### 4.6 Abstandssystem

Basierend auf **4px-Raster** für konsistente, datendichte Dashboard-Layouts:

- `0.5`: 0.125rem (2px)
- `1`: 0.25rem (4px)
- `1.5`: 0.375rem (6px)
- `2`: 0.5rem (8px)
- `2.5`: 0.625rem (10px)
- `3`: 0.75rem (12px)
- `3.5`: 0.875rem (14px)
- `4`: 1rem (16px)
- `5`: 1.25rem (20px)
- `6`: 1.5rem (24px)
- `7`: 1.75rem (28px)
- `8`: 2rem (32px)
- `9`: 2.25rem (36px)
- `10`: 2.5rem (40px)
- `11`: 2.75rem (44px)
- `12`: 3rem (48px)
- `14`: 3.5rem (56px)
- `16`: 4rem (64px)
- `20`: 5rem (80px)
- `24`: 6rem (96px)
- `28`: 7rem (112px)
- `32`: 8rem (128px)

### 4.7 Rahmenradius

- `radius-none`: 0
- `radius-sm`: 0.25rem (4px) - Subtile Rundung
- `radius-md`: 0.375rem (6px) - Eingabefelder
- `radius-lg`: 0.5rem (8px) - Buttons
- `radius-xl`: 0.75rem (12px) - Karten
- `radius-2xl`: 1rem (16px) - Modals
- `radius-3xl`: 1.5rem (24px) - Feature-Hervorhebungen
- `radius-full`: 9999px - Pills, Avatare

### 4.8 Schatten

- `shadow-xs`: Subtile Erhebung
- `shadow-sm`: Kleine Erhebung
- `shadow-md`: Mittlere Erhebung (Karten)
- `shadow-lg`: Große Erhebung (Modals)
- `shadow-xl`: Sehr große Erhebung
- `shadow-focus`: Fokusring (3px forest-200)

### 4.9 UI-Komponenten und Steuerelemente

Alle Komponenten verwenden das `@mira/ui` Paket, das das MIRA Design-System implementiert:

**Formular-Steuerelemente:**
- Button (primär, sekundär, Ghost-Varianten)
- Input (Text, E-Mail, Passwort, Suche)
- Select/Dropdown
- Checkbox
- Radio
- Textarea
- Datei-Upload (nur UI)

**Anzeige-Komponenten:**
- Card (mit CardHeader, CardContent, CardFooter)
- Badge (Status, Rang, Errungenschaft-Varianten)
- Avatar (mit Fallback-Initialen)
- Fortschrittsbalken
- Datentabelle (sortierbar, filterbar, paginiert)
- Modal (mit Headless UI)

**Gamification-Komponenten:**
- Serien-Indikator
- Level-Badge
- Fortschrittsring
- Errungenschafts-Karte
- Bestenlisten-Eintrag

**Navigation:**
- App-Menü (zusammenklappbare Seitenleiste)
- Breadcrumbs
- Tab-Navigation
- Rollenauswahl

**Feedback:**
- Ladezustände
- Erfolgsmeldungen
- Fehlermeldungen
- Leere Zustände

### 4.10 Design-Prinzipien

1. **Beweis über Behauptungen**: Jede Impact-Behauptung durch verifizierbare Beweise gestützt
2. **Fortschritt, nicht Druck**: Motivation durch sichtbaren Fortschritt, nicht Dringlichkeit
3. **Klarheit schafft Vertrauen**: Komplexe Systeme durch Visualisierung erklärt
4. **Wärme durch Ergebnisse**: Metriken mit realen Ergebnissen verbinden
5. **Professionelle Grundlage**: Zuverlässige, vorhersehbare Interface-Muster

### 4.11 Lokalisierungs-Unterstützung

**MVP-Sprachen:**
- Deutsch (de-DE) - Primär
- Englisch (en-GB) - Sekundär

**Zukünftige Sprachen (V1):**
- Französisch (fr-FR)
- Italienisch (it-IT)

**Text-Expansion:**
- Komponenten berücksichtigen deutschen Text (typischerweise 30% länger als Englisch)
- Flexible Layouts mit `flex-wrap` für Button-Gruppen
- Relative Einheiten wo angemessen
- Mindestbreiten-Beschränkungen statt fester Breiten

---

## 5. Technische Implementierung

### 5.1 Technologie-Stack

- **Framework**: Vite + React 18 (TypeScript)
- **Styling**: Tailwind CSS 3+ mit MIRA Design-Tokens
- **UI-Komponenten**: `@mira/ui` Paket (gemeinsame Komponentenbibliothek)
- **State Management**: React Hooks (useState, useContext)
- **Routing**: Client-seitige zustandsbasierte Navigation
- **Tests**: Vitest (Unit) + Playwright (E2E)
- **Build**: Statische HTML/CSS/JS-Ausgabe

### 5.2 Projektstruktur

```
ux-prototype/
├── docs/                  # Dokumentation
│   ├── personas.md
│   ├── journeys.md
│   ├── spec.md
│   └── CUSTOMER_REPORT.md
├── src/
│   ├── pages/            # Bildschirm-Komponenten
│   │   ├── auth/         # Authentifizierungs-Bildschirme
│   │   ├── reseller/     # Reseller-Bildschirme
│   │   ├── customer/     # Kunden-Bildschirme
│   │   ├── admin/        # Admin-Bildschirme
│   │   ├── gamification/ # Gamification-Konzept-Bildschirme
│   │   └── shared/       # Gemeinsame Bildschirme (Einstellungen)
│   ├── components/       # Prototyp-spezifische Komponenten
│   ├── data/            # Mock-Daten
│   ├── hooks/           # Benutzerdefinierte Hooks
│   ├── i18n/            # Lokalisierung
│   └── App.tsx          # Haupt-App-Komponente
├── e2e/                  # E2E-Tests
├── dist/                 # Build-Ausgabe (generiert)
└── README.md
```

### 5.3 Hauptfunktionen

- **Passwortschutz**: Einfaches Demo-Passwort über Umgebungsvariable
- **Rollenwechsel**: Sofortiger Wechsel zwischen Reseller, Kunde, Admin
- **Sitemap-Navigation**: Alle Bildschirme nach Kategorie durchsuchen
- **Mock-Daten**: Alle Daten hardcodiert in `src/data/mockData.ts`
- **Statische Ausgabe**: Baut zu statischen HTML-Dateien
- **Kein Backend erforderlich**: Vollständig client-seitig

---

## 6. Lieferungen-Zusammenfassung

### 6.1 Interaktiver Prototyp
- ✅ 61 vollständig interaktive Bildschirme
- ✅ 8 vollständige Benutzerreisen
- ✅ Mobile-responsive Design
- ✅ Rollenbasierte Navigation
- ✅ Realistische Mock-Daten

### 6.2 Dokumentation
- ✅ Persona-Profile
- ✅ Benutzerreisen-Karten
- ✅ Technische Spezifikation
- ✅ Kundenbericht
- ✅ Dieses Zusammenfassungsdokument

### 6.3 Zugriffsmethoden
- **ZIP-Datei**: Selbstständiges Paket (`mira-prototype-YYYYMMDD.zip`)
- **Bereitgestellte Version**: Kann auf Vercel, Netlify oder jedem statischen Host bereitgestellt werden
- **Entwicklungsserver**: Lokaler Server zum Testen (`pnpm dev`)

---

## 7. Erfolgskriterien

Der Prototyp erfüllt erfolgreich alle Erfolgskriterien:

1. ✅ Alle 61 Bildschirme implementiert (High-Level-Layouts)
2. ✅ Alle kritischen Reisen von Anfang bis Ende navigierbar
3. ✅ Rollenwechsel funktioniert nahtlos
4. ✅ UI-Kit-Komponenten durchgehend verwendet
5. ✅ Baut erfolgreich zu statischem HTML
6. ✅ Kann als ZIP-Datei geteilt oder bereitgestellt werden
7. ✅ Alle kritischen Reisen getestet (E2E)
8. ✅ Dokumentation vollständig

---

## 8. Nächste Schritte

### Validierung der Anforderungen
1. Prototyp mit Stakeholdern überprüfen
2. Alle Benutzerreisen von Anfang bis Ende testen
3. Feedback zu Design, Inhalten und Abläufen sammeln
4. Erforderliche Änderungen dokumentieren

### Verfeinerungsprozess
1. Feedback von allen Stakeholdern sammeln
2. Kritische vs. Nice-to-Have-Änderungen priorisieren
3. Prototyp basierend auf Feedback aktualisieren
4. Änderungen erneut validieren
5. Finale Genehmigung vor Entwicklung

### Entwicklungs-Übergabe
Nach Genehmigung dient der Prototyp als:
- **Entwicklungsreferenz**: Spezifikation für Implementierung
- **Komponenten-Leitfaden**: Zeigt, wie UI-Komponenten verwendet werden sollten
- **Ablauf-Dokumentation**: Benutzerreisen klar definiert
- **Design-System-Validierung**: Sichert konsistente Implementierung

---

**Dokument erstellt:** 2025-12-29  
**Prototyp-Version:** 1.0  
**Status:** Vollständig und bereit zur Überprüfung
