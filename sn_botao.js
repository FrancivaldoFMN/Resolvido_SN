//Script

function onClick() {
    
    g_form.setValue('state', -12);
	g_form.setValue('stage', 'resolved');
    g_form.setMandatory('close_notes', true);
    g_form.setValue('assigned_to', g_user.userID);
    gsftSubmit(null, g_form.getFormElement(), 'resolvido');
}

if (typeof window == 'undefined')
    serverResolve();

function serverResolve() {
    current.state = -12;
    current.stage = 'resolved';
    current.update();
    action.setRedirectURL(current);
}

// Client Script do espaço
function onClick() {

	g_form.setValue('state', -12);
	g_form.setValue('stage', 'resolved');
	g_form.setMandatory('close_notes', true);
	g_form.setValue('assigned_to', g_user.userID, g_user.getFullName());
	g_form.submit(g_form.getActionName());

}