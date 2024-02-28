import {z} from "zod";
import {zod} from "sveltekit-superforms/adapters";
import {superValidate} from "sveltekit-superforms";

export const _schema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
})

export const load = async () => {
    return {
        form: superValidate(zod(_schema))
    }
}