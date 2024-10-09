import { ChangeEvent, useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Text, Paper, Group, PaperProps, Button, Checkbox, Stack, Select, NativeSelect, NumberInput } from '@mantine/core';
import { DateInput } from "@mantine/dates";
import { primaryColor } from '../assets/colors/colors';
import { Link } from 'react-router-dom';
import { MdDateRange } from 'react-icons/md';
import { ngStates } from '../staticData/nigerianStates';
import { localGovernments } from '../staticData/localGovernmnets';


export default function Signup(props: PaperProps) {
  const [selectedState, setSelectedState] = useState('');
  const [lgas, setLgas] = useState<string[]>([]);

  const form = useForm({
    initialValues: {
      fullName: '',
      dateOfBirth: null as Date | null,
      gender: null as string | null,
      stateOfOrigin: '',
      localGovt: '',
      address: '',
      phoneNumber: '',
      email: '',
      nationalIdentityNumber: '',
      employmentStatus: '',
      jobTitle: '',
      highestEducationLevel: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  // Function to handle state selection
  const handleStateChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const state = event.currentTarget.value as keyof typeof localGovernments
    setSelectedState(state);
    setLgas(localGovernments[state] || []);
    form.setFieldValue('stateOfOrigin', state);
    form.setFieldValue('localGovt', '');
  };

  return (
    <Stack c="white" mt={"50px"} align='center'>
      <Paper w={{ base: "95%", sm: "95%", md: "500px", lg: "500px" }} bg={"#57c64c"} radius="md" p="xl" withBorder {...props}>
        <Text ta={"center"} size="lg" fw={500}>
          Create new account
        </Text>

        <form onSubmit={form.onSubmit(() => { })}>
          <Stack>
            <TextInput
              label="Full Name"
              placeholder="Your full legal name"
              value={form.values.fullName}
              onChange={(event) => form.setFieldValue('fullName', event.currentTarget.value)}
              radius="md"
            />

            <Group justify='space-between' w={"100%"}>
              <Select
                data={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }]}
                value={form.values.gender ? form.values.gender : null}
                onChange={(_value) => form.setFieldValue("gender", _value)}
                placeholder='Gender'
                label={"Gender"}
                w={"48%"}
              />

              <DateInput
                value={form.values.dateOfBirth}
                onChange={(value) => form.setFieldValue('dateOfBirth', value)}
                label="Date of Birth"
                placeholder="Select your birth date"
                rightSection={<MdDateRange />}
                w={"48%"}
              />
            </Group>

            <NumberInput required hideControls label="National Identity Number (NIN)" value={form.values.nationalIdentityNumber} onChange={(value) => form.setFieldValue("nationalIdentityNumber", value.toString())} />

            <Group justify='space-between'>
              <NativeSelect
                w={"48%"}
                label="State of origin"
                required
                value={form.values.stateOfOrigin}
                onChange={handleStateChange}
                data={ngStates.map(state => ({
                  value: state,
                  label: state,
                }))}
              />

              <NativeSelect
                w={"48%"}
                label="LGA"
                required
                value={form.values.localGovt}
                onChange={(event) => form.setFieldValue('localGovt', event.currentTarget.value)}
                data={lgas.map((lga) => ({
                  value: lga,
                  label: lga,
                }))}
                disabled={!selectedState} // Disable LGA selection if no state is selected
              />
            </Group>

            <TextInput
              required
              label="Email"
              placeholder="example@domain.com"
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && 'Invalid email'}
              radius="md"
            />

            <NumberInput required hideControls label="Phone number" value={form.values.phoneNumber} onChange={(value) => form.setFieldValue("phoneNumber", value.toString())} />

            <Group>
              <Select
                clearable
                data={[{ value: 'employed', label: 'Employed' }, { value: 'unemployed', label: 'Unemployed' }, { value: 'selfEmployed', label: 'Self employed' }]}
                value={form.values.employmentStatus}
                onChange={(_value) => form.setFieldValue("employmentStatus", _value ? _value : "")}
                placeholder='Employment Status'
                label={"Employment Status"}
                w={"48%"}
              />

              <TextInput
                required
                label="Job Title"
                placeholder="Trader, entrepreneur, etc."
                value={form.values.jobTitle}
                onChange={(event) => form.setFieldValue('jobTitle', event.currentTarget.value)}
                radius="md"
              />
            </Group>

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
              radius="md"
            />

            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
            />
          </Stack>

          <Group justify="space-between" mt="xl">
            <Link to={"/login"} style={{ color: "white", fontWeight: "bold" }}>
              Already have an account? Login
            </Link>
            <Button color={primaryColor} type="submit" radius="xl">
              Create Account
            </Button>
          </Group>
        </form>
      </Paper>
    </Stack>
  );
}
