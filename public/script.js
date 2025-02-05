function checkKenteken() {
    const kenteken = document.getElementById('kenteken-input').value;

    if (!kenteken) {
        alert("Voer een geldig kenteken in.");
        return;
    }

    fetch(`http://localhost:3000/check-kenteken?kenteken=${kenteken}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('auto-informatie').innerText = data.error;
            } else {


                const kenteken = data.kenteken || 'Onbekend';
                const voertuigsoort = data.voertuigsoort || 'Onbekend';
                const merk = data.merk || 'Onbekend';
                const handelsbenaming = data.handelsbenaming || 'Onbekend';
                const datumTenaamstelling = data.datum_tenaamstelling || 'Onbekend';
                const inrichting = data.inrichting || 'Onbekend';
                const eersteKleur = data.eerste_kleur || 'Onbekend';
                const tweedeKleur = data.tweede_kleur || 'Onbekend';
                const aantalCilinders = data.aantal_cilinders || 'Onbekend';
                const massaLedigVoertuig = data.massa_ledig_voertuig || 'Onbekend';
                const massaRijklaar = data.massa_rijklaar || 'Onbekend';
                const datumEersteToelating = data.datum_eerste_toelating || 'Onbekend';
                const datumEersteTenaamstellingInNederland = data.datum_eerste_tenaamstelling_in_nederland || 'Onbekend';
                const wachtOpKeuren = data.wacht_op_keuren || 'Onbekend';
                const wamVerzekerd = data.wam_verzekerd || 'Onbekend';
                const aantalDeuren = data.aantal_deuren || 'Onbekend';
                const aantalWielen = data.aantal_wielen || 'Onbekend';
                const europeseVoertuigcategorie = data.europese_voertuigcategorie || 'Onbekend';
                const vermogenMassarijklaar = data.vermogen_massarijklaar || 'Onbekend';
                const wielbasis = data.wielbasis || 'Onbekend';
                const exportIndicator = data.export_indicator || 'Onbekend';
                const openstaandeTerugroepactieIndicator = data.openstaande_terugroepactie_indicator || 'Onbekend';
                const taxiIndicator = data.taxi_indicator || 'Onbekend';
                const jaarLaatsteRegistratieTellerstand = data.jaar_laatste_registratie_tellerstand || 'Onbekend';
                const tellerstandoordeel = data.tellerstandoordeel || 'Onbekend';
                const codeToelichtingTellerstandoordeel = data.code_toelichting_tellerstandoordeel || 'Onbekend';


                document.getElementById('auto-informatie').innerHTML = `
                    <strong>Kenteken:</strong> ${kenteken}<br>
                    <strong>Voertuigsoort:</strong> ${voertuigsoort}<br>
                    <strong>Merk:</strong> ${merk}<br>
                    <strong>Handelsbenaming:</strong> ${handelsbenaming}<br>
                    <strong>Datum tenaamstelling:</strong> ${datumTenaamstelling}<br>
                    <strong>Inrichting:</strong> ${inrichting}<br>
                    <strong>Eerste kleur:</strong> ${eersteKleur}<br>
                    <strong>Tweede kleur:</strong> ${tweedeKleur}<br>
                    <strong>Aantal cilinders:</strong> ${aantalCilinders}<br>
                    <strong>Massa leeg voertuig:</strong> ${massaLedigVoertuig} kg<br>
                    <strong>Massa rijklaar:</strong> ${massaRijklaar} kg<br>
                    <strong>Datum eerste toelating:</strong> ${datumEersteToelating}<br>
                    <strong>Datum eerste tenaamstelling in Nederland:</strong> ${datumEersteTenaamstellingInNederland}<br>
                    <strong>Wacht op keuren:</strong> ${wachtOpKeuren}<br>
                    <strong>WAM verzekerd:</strong> ${wamVerzekerd}<br>
                    <strong>Aantal deuren:</strong> ${aantalDeuren}<br>
                    <strong>Aantal wielen:</strong> ${aantalWielen}<br>
                    <strong>Europese voertuigcategorie:</strong> ${europeseVoertuigcategorie}<br>
                    <strong>Vermogen massa rijklaar:</strong> ${vermogenMassarijklaar} kW<br>
                    <strong>Wielbasis:</strong> ${wielbasis} mm<br>
                    <strong>Export indicator:</strong> ${exportIndicator}<br>
                    <strong>Openstaande terugroepactie:</strong> ${openstaandeTerugroepactieIndicator}<br>
                    <strong>Taxi indicator:</strong> ${taxiIndicator}<br>
                    <strong>Jaar laatste registratie tellerstand:</strong> ${jaarLaatsteRegistratieTellerstand}<br>
                    <strong>Tellerstand oordeel:</strong> ${tellerstandoordeel}<br>
                    <strong>Code toelichting tellerstand oordeel:</strong> ${codeToelichtingTellerstandoordeel}<br>
                `;
            }
        })
        .catch(error => {
            console.error("Fout:", error);
            document.getElementById('auto-informatie').innerText = "Er is een fout opgetreden.";
        });
}
