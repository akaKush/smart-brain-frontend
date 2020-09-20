# smart-brain-frontend

This is the frontend part from the final project (called simply Smart Brain).

Created with React.

Step 1. <b>Create & Clone Repository</b>

Step 2. <b>create-react-app face-recognition-brain</b>

Step 3. <b>yarn start</b> (primer hem de fer cd face-recognition-brain, sino no troba el fitxer .json)

Step 4. <b>Eliminem tots els fitxers i codi que no ens interessa </b>(logo.svg + imports del logo + tot el que tenim a dins la "<div>" principal de App.js)

Step 5. (opcional --> Bona praxis)<b> Creem una altre carpeta anomenada components</b> a dins de src/components i<b> a dins</b> d'aquesta carpeta, creem<b> tantes carpetes noves com components vulguem afegir</b> al nostre projecte, així tindrem tots els fitxers ben ordenats i fàcils de trobar 

Step 6. <b>Build your app!</b>


<b>Tips:</b>

Per qualsevol REACT APP és bo primer pensar en quins components necessitarem, i fer-nos un esbós, així després ja podem començar a crear l'app a partir d'aquests components, i com interaccionen entre ells), en el cas d'aquest projecte:


Per els components que <b>NO</b> hagin de tenir <b>state</b>, els definim tq:

const Component = () => {
    return (
        //code
    );
}

export default Component;

