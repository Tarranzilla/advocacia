import React from "react";

const MapComponent = () => {
    const address = "Avenida Manoel Ribas, nº 507 - Sala 05 - Mercês, Curitiba - PR, 80510-346, Brasil";
    const encodedAddress = encodeURIComponent(address);
    const mapSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

    return (
        <iframe
            title="Mapa de localização do escritório de advocacia Stresser & Machado"
            src={mapSrc}
            className="Map"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            style={{ width: "100%", height: "400px", border: 0 }}
        />
    );
};

export default MapComponent;
