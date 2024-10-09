import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Stack,
  Space,
} from '@mantine/core';
import { primaryColor } from '../assets/colors/colors';
import { Link } from 'react-router-dom';

export default function Login(props: PaperProps) {
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  return (
    <Stack c="white" mt={"50px"} align='center'>
      <Paper w={{ base: "95%", sm: "95%", md: "500px", lg: "500px" }} bg={"#57c64c"} radius="md" p="xl" withBorder {...props}>
        <Text ta={"center"} size="lg" fw={500}>
          Welcome back, sign in to your existing account
        </Text>


        {/* <Divider label="Or continue with email" labelPosition="center" my="lg" /> */}

        <Space h={25} />

        <form onSubmit={form.onSubmit(() => { })}>
          <Stack>

            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && 'Invalid email'}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
              radius="md"
            />
          </Stack>

          <Group justify="space-between" mt="xl">
            <Link to={"/create-user"} style={{ color: "white", fontWeight: "bold" }}>
              Don't have an account? Register
            </Link>
            <Button color={primaryColor} type="submit" radius="xl">
              Login
            </Button>
          </Group>
        </form>
      </Paper>
    </Stack>
  );
}