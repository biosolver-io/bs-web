import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import { create } from "domain";
import { useEffect, useRef } from "react";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import logoPng from "~/assets/images/logos/base.png";

import { createUser, getUserByEmail } from "~/models/user.server";
import { createRoles } from "~/models/userRole.server";
import { createUserSession, getUserId } from "~/session.server";
import { safeRedirect, validateEmail } from "~/utils";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/dashboard");
  return json({});
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  console.log(formData)
  const email = formData.get("email");
  const password = formData.get("password");
  const roles = formData.getAll("roles");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/dashboard");

  console.log(email, password, roles)

  if (!validateEmail(email)) {
    return json(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  }

  if (typeof password !== "string" || password.length === 0) {
    return json(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  }

  if (password.length < 8) {
    return json(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  }

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return json(
      {
        errors: {
          email: "A user already exists with this email",
          password: null,
        },
      },
      { status: 400 }
    );
  }

  const user = await createUser(email, password);
  await createRoles(user.id, roles.map((role) => role.toString()));

  return createUserSession({
    redirectTo,
    remember: false,
    request,
    userId: user.id,
  });
};

export const meta: V2_MetaFunction = () => [{ title: "Sign Up" }];

export default function Register() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;
  const actionData = useActionData<typeof action>();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const rolesRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <>
      <div className="flex min-h-full flex-1 justify-center">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className='w-full items-center text-center'>
              <Link to="/" className="items-center" >
                <img className="h-16 w-16 mx-auto" src={logoPng} alt="BioSolver Logo" />
              </Link>
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Already a member?{' '}
                <Link to="/login" className="font-semibold text-purple-600 hover:text-purple-500">
                  Sign In
                </Link>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <Form method="post" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        ref={emailRef}
                        id="email"
                        required
                        autoFocus={true}
                        name="email"
                        type="email"
                        autoComplete="email"
                        aria-invalid={actionData?.errors?.email ? true : undefined}
                        aria-describedby="email-error"
                        className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
                      />
                      {actionData?.errors?.email ? (
                        <div className="pt-1 text-red-700" id="email-error">
                          {actionData.errors.email}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        ref={passwordRef}
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        aria-invalid={actionData?.errors?.password ? true : undefined}
                        aria-describedby="password-error"
                        className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
                      />
                      {actionData?.errors?.password ? (
                        <div className="pt-1 text-red-700" id="password-error">
                          {actionData.errors.password}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <fieldset>
                    <legend>Roles</legend>
                    <div className="space-y-5">
                      <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="role-solver"
                            aria-describedby="role-solver-description"
                            name="roles"
                            value="solver"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label htmlFor="role-solver" className="font-medium text-gray-900">
                            Solver
                          </label>
                          <p id="role-solver-description" className="text-gray-500">
                            I am an expert/student looking for work.
                          </p>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="role-seeker"
                            aria-describedby="role-seeker-description"
                            name="roles"
                            value="seeker"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label htmlFor="role-seeker" className="font-medium text-gray-900">
                            Seeker
                          </label>
                          <p id="role-seeker-description" className="text-gray-500">
                            I am looking to hire a Freelancer.
                          </p>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="role-referrer"
                            aria-describedby="role-referrer-description"
                            name="roles"
                            value="referrer"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label htmlFor="role-referrer" className="font-medium text-gray-900">
                            Referral Partner
                          </label>
                          <p id="role-referrer-description" className="text-gray-500">
                            I can spread the word.
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <input type="hidden" name="redirectTo" value={redirectTo} />
                  <button
                    type="submit"
                    className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
                  >
                    Create Account
                  </button>
                  <div className="flex items-center justify-center">
                    <div className="text-center text-sm text-gray-500">
                      Already have an account?{" "}
                      <Link
                        className="text-blue-500 underline"
                        to={{
                          pathname: "/login",
                          search: searchParams.toString(),
                        }}
                      >
                        Log in
                      </Link>
                    </div>
                  </div>
                </Form>
              </div>

              <div className="mt-10">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-1.5 text-black bordered border-2 border-black"
                  >
                    <FaGoogle className="h-5 w-5" />
                    <span className="text-sm font-semibold leading-6">Google</span>
                  </a>

                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-1.5 text-black bordered border-2 border-black"
                  >
                    <FaLinkedin className="h-5 w-5" />
                    <span className="text-sm font-semibold leading-6">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
