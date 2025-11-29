// Utilitaires d'authentification pour l'administration

export const login = (token) => {
  localStorage.setItem('admin_token', token);
};

export const logout = () => {
  localStorage.removeItem('admin_token');
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('admin_token');
  return !!token;
};

export const getToken = () => {
  return localStorage.getItem('admin_token');
};