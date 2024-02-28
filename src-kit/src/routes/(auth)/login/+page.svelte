<script lang="ts">
    import { Button } from '$lib/components/ui/button'
    import { Input } from '$lib/components/ui/input'
    import { Label } from '$lib/components/ui/label'
    import { cn } from '$lib/utils'
    import { superForm } from 'sveltekit-superforms'
    import { zodClient } from 'sveltekit-superforms/adapters'
    import { _schema } from './+page'
    import * as Form from '$lib/components/ui/form'


    export let data

    let className: string | undefined | null = undefined
    export { className as class }

    const { form, enhance } = superForm(data.form, {
        validators: zodClient(_schema),
    })
</script>

<div class={cn("grid gap-6", className)} {...$$restProps}>
    <form method="POST" use:enhance>
        <div class="grid gap-2">
            <Form.Field {form} name="email">
                <Form.Control let:attrs>
                    <Form.Label>Username</Form.Label>
                    <Input {...attrs} bind:value={$form.email} type="email" />
                </Form.Control>
                <Form.FieldErrors />
            </Form.Field>
            <Form.Field {form} name="password">
                <Form.Control let:attrs>
                    <Form.Label>Password</Form.Label>
                    <Input {...attrs} bind:value={$form.password} type="password" />
                </Form.Control>
                <Form.FieldErrors />
            </Form.Field>

            <!--            <div class="grid gap-1">-->
            <!--                <Label class="sr-only" for="email">Email</Label>-->
            <!--                <Input-->
            <!--                        id="email"-->
            <!--                        placeholder="name@example.com"-->
            <!--                        type="email"-->
            <!--                        autocapitalize="none"-->
            <!--                        autocomplete="email"-->
            <!--                        autocorrect="off"-->
            <!--                />-->
            <!--            </div>-->
            <Button>
                Sign in
            </Button>
        </div>
    </form>
</div>