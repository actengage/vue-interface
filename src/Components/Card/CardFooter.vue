<script>
import CardHeader from './CardHeader';

export default {

    name: 'card-footer',

    extends: CardHeader,

    props: {

        /**
         * The component's HTML tag name
         *
         * @property String
         */
        tag: {
            type: String,
            default: 'div'
        }

    }

};
</script>
