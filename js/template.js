//template

export const Description = {
    Image: "./asset/istockphoto-1406960186-612x612.jpg",
    Ville: `New York est une ville composée de 5 arrondissements à l'embouchure du fleuve Hudson et de l'océan Atlantique. 
    En son centre se trouve Manhattan, un arrondissement densément peuplé faisant partie des principaux centres commerciaux, 
    financiers et culturels du monde. Ses sites incontournables comprennent des gratte-ciel comme l'Empire State Building et 
    l'immense Central Park. Le théâtre de Broadway est situé sur Times Square<br>`,
    Météo: "6°C, vent O à 6 km/h, 68 % d'humidité weather.com<br>",
    quartier: "Harlem, Upper East Side, West Village, Flushing, SoHo, PLUS<br>",
    population: "8,468 millions (2021)<br>",
    superficie: "40° 42′ 51″ nord, 74° 00′ 21″ ouest"
};

export const template = {
    el: document.querySelector("section"),
    printF() {
        return this.el.innerHTML += `
                                    <h2 itemprop="name"><ion-icon name="bulb-outline"></ion-icon>A propos</h2>
                                    <img src="${Description.Image}" alt="Img" itemprop="image">
                                    <ul itemprop="description">
                                        <li><b><ion-icon name="easel-outline"></ion-icon> Description</b> : ${Description.Ville}</li>
                                        <li><b><ion-icon name="partly-sunny-outline"></ion-icon> Météo</b> : ${Description.Météo}</li>
                                        <li><b><ion-icon name="business-outline"></ion-icon> Quartier</b> : ${Description.quartier}</li>
                                        <li><b><ion-icon name="people-circle-outline"></ion-icon> Population</b> : ${Description.population}</li>
                                        <li><b><ion-icon name="location-outline"></ion-icon> Coordonnées</b> : ${Description.superficie}</li>
                                    </ul>
                                    `;
    }
};