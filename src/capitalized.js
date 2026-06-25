 const capitalizeMe = (value) => {
             const effect = value.at(0).toUpperCase();
                const new_value = value.slice(1)
                return `${effect}${new_value}`
        }

        // capitalizeMe('newton')
        module.exports = capitalizeMe;