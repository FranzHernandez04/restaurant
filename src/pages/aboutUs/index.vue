<template>
    <Navbar />
    <AboutUsPage />
    <Footer />
</template>

<script>
import Navbar from '../../components/Navbar'
import AboutUsPage from '../../components/AboutUsPage'
import Footer from '../../components/Footer'

export default {
    components: {
        Navbar,
        AboutUsPage,
        Footer
    }
}
</script>