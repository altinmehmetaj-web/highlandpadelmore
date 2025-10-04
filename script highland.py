import zipfile
import shutil

shutil.copy('logo.jpg', 'logo.png')

html_code = '''
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Highland Padel & More</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      background: #111d2b;
      color: #e6f5ea;
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5vw 7vw;
      background: #111d2b;
    }
    .header img {
      height: 72px;
      background: none;
    }
    .menu a {
      margin-left: 24px;
      color: #10e3a3;
      text-decoration: none;
      font-weight: bold;
    }
    .hero {
      padding: 56px 20px 28px 20px;
      text-align: center;
      background: linear-gradient(160deg, #174585 60%, #10e3a3 100%);
      border-bottom: 12px solid #10e3a3;
    }
    .hero h1 {
      font-size: 2.5em;
      margin-bottom: 10px;
      color: #e6f5ea;
      font-family: 'Arial Black', Arial, sans-serif;
      letter-spacing: 0.04em;
    }
    .hero p {
      font-size: 1.25em;
      font-weight: 600;
      margin-bottom: 18px;
    }
    .servizi {
      padding: 38px 7vw;
    }
    .servizi h2 {
      font-size: 1.6em;
      color: #10e3a3;
      background: none;
      margin-bottom: 28px;
    }
    .servizi ul {
      list-style: none;
      padding: 0;
      columns: 2;
      max-width: 800px;
      margin: auto;
    }
    .servizi li {
      margin-bottom: 14px;
      font-size: 1.05em;
      color: #e6f5ea;
      padding-left: 0.6em;
    }
    #contatti {
      padding: 34px 7vw 64px 7vw;
      background: #153e5a;
    }
    #contatti h2 {
      color: #10e3a3;
      font-size: 1.3em;
      margin-bottom: 20px;
    }
    form {
      background: #174585;
      padding: 32px;
      border-radius: 16px;
      max-width: 400px;
      margin: 0 auto;
    }
    form input, form textarea {
      width: 100%;
      padding: 10px;
      border: none;
      margin: 10px 0;
      border-radius: 6px;
      font-size: 1em;
      background: #e6f5ea;
      color: #0e1a23;
    }
    form button {
      background: #10e3a3;
      color: #153e5a;
      border: none;
      padding: 12px 30px;
      border-radius: 6px;
      font-size: 1.1em;
      font-weight: bold;
      cursor: pointer;
      margin-top: 10px;
    }
    .footer {
      text-align: center;
      color: #bcd9c3;
      background: #121c24;
      padding: 22px 0;
      font-size: 1em;
      letter-spacing: 0.05em;
      border-top: 4px solid #10e3a3;
    }
  </style>
</head>
<body>
  <div class="header">
    <img src="logo.png" alt="Highland Padel & More">
    <nav class="menu">
      <a href="#">Home</a>
      <a href="#servizi">Strutture</a>
      <a href="#contatti">Contatti</a>
    </nav>
  </div>
  <div class="hero">
    <h1>Highland Padel & More</h1>
    <p>Dove il benessere incontra il divertimento</p>
    <p style="font-size:1.1em;margin-top:26px;">Immerso tra le montagne, nel cuore del verde, a due passi dal fiume.</p>
  </div>
  <section class="servizi" id="servizi">
    <h2>Strutture e Servizi</h2>
    <ul>
      <li>3 Campi Padel</li>
      <li>Campo Pickleball</li>
      <li>Pista Skateboard</li>
      <li>Basket, Pallavolo, Calcio a 5, Beach Volley</li>
      <li>Piscina & Solarium</li>
      <li>Bar interno & esterno, Cucina, BBQ</li>
      <li>Area Bimbi & Dog Park</li>
      <li>Sala Yoga, Massaggi, Sauna</li>
      <li>Palestra interna/esterna</li>
      <li>Arrampicata & coperture rimovibili</li>
      <li>Noleggio bici elettrica</li>
    </ul>
  </section>
  <section id="contatti">
    <h2>Contattaci</h2>
    <form method="POST" action="https://formspree.io/f/tuo-codice">
      <input type="text" name="nome" placeholder="Il tuo nome" required>
      <input type="email" name="email" placeholder="La tua email" required>
      <textarea name="messaggio" placeholder="Scrivi qui il tuo messaggio" rows="4" required></textarea>
      <button type="submit">Invia</button>
    </form>
  </section>
  <div class="footer">
    © 2025 Highland Padel & More &ndash; Progetto immerso nella natura | Seguici su Instagram / Facebook
  </div>
</body>
</html>
'''

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_code)

with zipfile.ZipFile('HighlandPadel.zip', 'w') as zipf:
    zipf.write('index.html')
    zipf.write('logo.png')

'HighlandPadel.zip'