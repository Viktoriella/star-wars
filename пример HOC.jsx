// Обрачиваемый компонент

const App = ({ name }) => {
    return (
        <h1>{name}</h1>
    )
}

// Higher-Order Component
const withData = View => {
    return props => {
        return (
            <View
                name='Tony'
                {...props}
            />
        )
    }
}

// Компонент, обернутый в HOC
const EnchancedComponent = withData(App);

<EnchancedComponent />