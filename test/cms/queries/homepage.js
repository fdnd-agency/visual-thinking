export const homepageDirectusQuery = `
    query homepage {
    vt_homepage {
        titel
        beschrijving        
    }
}`


export const homepageHygraphQuery = `
    query homepage {
        page(where: {id: "clv8j3yo84g2107unotjahr7y"}) {
            title
            content {
                html
            }        
    }
}`