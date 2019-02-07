<template>
    <span class="navigation-error fa-stack fa-md" :title="error">
        <font-awesome-layers>
            <font-awesome-icon icon="certificate" size="2x" />
            <font-awesome-icon icon="exclamation" />
        </font-awesome-layers>
    </span>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCertificate } from '@fortawesome/free-solid-svg-icons/faCertificate';
import { faExclamation } from '@fortawesome/free-solid-svg-icons/faExclamation';
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';

library.add(faCertificate);
library.add(faExclamation);

export default {

    name: 'NavigationError',

    components: {
        FontAwesomeIcon,
        FontAwesomeLayers
    },

    props: {

        error: {
            type: String,
            required: true
        }

    }

};
</script>

<style lang="scss">
@import './node_modules/bootstrap/scss/_functions.scss';
@import './node_modules/bootstrap/scss/_variables.scss';

.navigation-error {
    color: $danger;
}
</style>
