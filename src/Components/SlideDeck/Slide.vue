<script>
export default {

    name: 'slide',

    functional: true,

    props: {
        vnode: {
            type: Object,
            required: true,
            validate(value) {
                return value.tag && value.elm;
            }
        }
    },

    render(h, context) {
        return context.props.vnode;
    }

};
</script>
