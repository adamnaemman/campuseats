function VendorCard() {
    // 1. Declaration of vendor object with its attributes (name, location, openHours, isOpen)
    const vendor = {
        name: "Shawarma",
        location: "Mahallah Faruq",
        openHours: "10:00 AM - 10:00 PM",
        isOpen: true,
    }

    // 2. Show the first letter of the 
    const firstLetter = vendor.name.charAt(0)

    return (
        <div className="vendor-card">
            <div className="thumb">
                {firstLetter}
            </div>

            <div className="vendor-info">
                <h3 className="vendor-name">{vendor.name}</h3>
                <p className="vendor-location">{vendor.location}</p>
                <p className="vendor-openhours">{vendor.openHours}</p>
                
                /*3. Show Open Now and Closed */
                /*4. Show open and closed status*/
                <span className={`status ${vendor.isOpen ? 'open' : 'closed'}`}>
                    {vendor.isOpen ? 'Open Now' : 'Closed'}
                </span>
            </div>
        </div>

        
    )
}