// const usuario_id = '@inventario_usuario_id'
// const filial = '@inventario_filial'
// const usuario_nome = '@inventario_usuario_nome'
const token = '@app_kanbam-colab'
export const getToken = () => sessionStorage.getItem(token);

export const Autenticado = () => sessionStorage.getItem(token) !== null;

export function login (dados_usuario){
    // sessionStorage.setItem(usuario_id,dados_usuario.usuario_id);
    // sessionStorage.setItem(filial,dados_usuario.filial);
    // sessionStorage.setItem(usuario_nome,dados_usuario.nome);
    sessionStorage.setItem(token,dados_usuario);
    
}

export function logout (){
    // sessionStorage.removeItem(usuario_id);
    // sessionStorage.removeItem(filial);
    // sessionStorage.removeItem(usuario_nome);
    sessionStorage.removeItem(token)
    window.location='/'
}
