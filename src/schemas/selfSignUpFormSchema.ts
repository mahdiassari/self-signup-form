import * as z from 'zod';

export const selfSignUpFormSchema = z.object({
    Name: z.string().min(1, { message: 'This field is required' }),
    EmailAddress: z.string().min(1, { message: 'This field is required' }),
    PhoneNumber: z.string().min(1, { message: 'This field is required.' })
        .min(11, { message: 'Phone number can not be less than 11 charachter.' })
        .max(11, { message: 'Phone number can not be more than 11 charachter.' }),
});